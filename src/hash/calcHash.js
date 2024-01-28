import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const data = await fs.readFile(filePath);
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    process.stdout.write(hash);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await calculateHash();
