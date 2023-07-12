import resumepdf from "../generatePDF.js";
import process from "process";
import path from "path";
import { convertData } from "./reorganiseData.js";
import fs from "fs";
import { findTemplateFiles } from "./findTemplate.js";

/**
 * Generates PDFs based on the request body, using a specified template.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function.
 */
export const generatePDFs = async (req, res, next) => {
  try {
    const generatedFilePath = path.join(process.cwd(), "generatedResume.pdf");

    // Check if the file exists
    if (fs.existsSync(generatedFilePath)) {
      // Remove the file
      fs.unlinkSync(generatedFilePath);
    }

    const id = req.body.template_id.id;

    // Reorganize the request body data
    req.body = convertData(req.body);
    req.body.template_id = `${id}`;

    const templateFiles = findTemplateFiles(process.cwd(), id);

    let docFile;

    if (templateFiles) {
      const directoryPath = path.dirname(templateFiles);
      const files = fs.readdirSync(directoryPath);
      for (const file of files) {
        if (file.endsWith("docx")) {
          docFile = path.join(directoryPath, file);
          break;
        }
      }
    } else {
      // Send Template Not Found Error
      const errorMessage = "Template not found.";
      return res.status(404).send({ error: errorMessage, code: 404 });
    }

    if (docFile) {
      let retries = 3;
      let success = false;

      while (retries > 0 && !success) {
        try {
          await resumepdf(req.body, docFile);
          success = true;
        } catch (error) {
          console.error("PDF generation failed. Retrying in 5 seconds...");
          await sleep(5000); // Wait for 5 seconds before retrying
          retries--;
        }
      }

      if (success) {
        const filePath = path.join(process.cwd(), "generatedResume.pdf");

        res.sendFile(filePath, (err) => {
          if (err) {
            console.error(err);
            // Handle the error if sending the file fails
            return res.status(500).send({ error: "Internal Server Error", code: 500 });
          } else {
            console.log("PDF sent successfully");
            // Optionally, you can remove the generated PDF file here
            fs.unlinkSync(filePath);
          }
        });
      } else {
        const errorMessage = "PDF generation failed after retries.";
        return res.status(500).send({ error: errorMessage, code: 500 });
      }
    } else {
      const errorMessage = "Docx File not found.";

      if (fs.existsSync(generatedFilePath)) {
        // Remove the file
        fs.unlinkSync(generatedFilePath);
      }
      return res.status(404).send({ error: errorMessage, code: 404 });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ error: "Internal Server Error", code: 500 });
  }
};

/**
 * Helper function to sleep for a specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise<void>} - A promise that resolves after the sleep duration.
 */
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
