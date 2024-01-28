import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const filePath = path.join(__dirname, "files");
  const filePathCopy = path.join(__dirname, "files_copy");

  try {
    await fs.access(filePath);
    try {
      await fs.access(filePathCopy);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.mkdir(filePathCopy);
        const files = await fs.readdir(filePath);
        for (const file of files) {
          await fs.copyFile(
            `${filePath}/${file}`,
            `${filePathCopy}/${file}`
          );
        }
      } else {
        throw err;
      }
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
