import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const filePath = path.join(__dirname, "files");

  try {
    await fs.access(filePath);

    const files = await fs.readdir(filePath);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
