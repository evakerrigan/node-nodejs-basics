import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const sourceFilePath = path.join(__dirname, "files/wrongFilename.txt");
  const newFilePath =  path.join(__dirname, "files/properFilename.md");

  try {
    await fs.access(sourceFilePath);
    try {
      await fs.access(newFilePath);
      console.log("ЭТОТ ФАЙЛ УЖЕ ЕСТЬ");
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.rename(sourceFilePath, newFilePath);
        console.log("ФАЙЛ ПЕРЕИМЕНОВАН УСПЕШНО");
      } else {
        throw err;
      }
    }
  } catch (err) {
    console.log("ФАЙЛА ИСТОЧНИКА НЕ СУЩЕСТВУЕТ");
    throw new Error("FS operation failed");
  }
};

await rename();
