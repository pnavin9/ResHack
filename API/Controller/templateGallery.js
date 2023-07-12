import fs from 'fs';
import path from 'path';

/**
 * Retrieves the list of PDF files in a specified folder and its subfolders.
 * @param {string} folderPath - The path to the folder.
 * @param {Array} fileList - The array to store the file information.
 */
function printSubFolders(folderPath, fileList) {
  const files = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory() && !file.name.includes('__MACOSX')) {
      const subFolderPath = path.join(folderPath, file.name);
      printSubFolders(subFolderPath, fileList);
    } else {
      const fileName = file.name;
      if (fileName.endsWith('.pdf')) {
        const filePath = path.join(folderPath, fileName);
        const fileContent = fs.readFileSync(filePath);
        fileList.push({
          index: fileList.length + 1,
          fileName,
          fileContent,
        });
      }
    }
  }
}

/**
 * Retrieves the list of PDF files in the template gallery folder and its subfolders.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function.
 */
export const templateGallery = async (req, res, next) => {
  const folderPath = './ResumeTemplates'; // Replace with the path to your folder
  const fileList = [];
  printSubFolders(folderPath, fileList);

  // Send the fileList as the response
  res.json({ fileList });
};
