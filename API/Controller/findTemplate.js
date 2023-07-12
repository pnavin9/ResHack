import fs from "fs";
import path from "path";

/**
 * Recursively searches for a file with a given filename in a directory and its subdirectories.
 * @param {string} dir - The directory to search in.
 * @param {string} filename - The name of the file to find.
 * @returns {string|null} - The path of the found file, or null if not found.
 */
export const findTemplateFiles = (dir, filename) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Recursively search in subdirectories
      const foundFile = findTemplateFiles(filePath, filename);
      if (foundFile) {
        return foundFile;
      }
    } else if (file === filename) {
      // Found the file with the specified filename
      return filePath;
    }
  }

  // File not found in the current directory and its subdirectories
  return null;
};
