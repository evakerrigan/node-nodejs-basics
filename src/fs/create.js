import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, "files/fresh.txt");
  const fileContent = "I am fresh and young";

  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(filePath, fileContent);
    } else {
      throw err;
    }
  }
};

await create();
