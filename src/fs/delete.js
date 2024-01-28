import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const filePath = path.join(__dirname, "files/fileToRemove.txt");

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
    console.log("ФАЙЛ УДАЛЕН");
  } catch (err) {
    console.log("ФАЙЛА НЕ СУЩЕСТВУЕТ");
    throw new Error("FS operation failed");
  }
};

await remove();
