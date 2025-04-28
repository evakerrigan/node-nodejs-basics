import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const readStream = fs.createReadStream(filePath);
  const hash = crypto.createHash("sha256");

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    const hashValue = hash.digest("hex");
    process.stdout.write(hashValue);
    console.log(hashValue);
  });

  readStream.on("error", (error) => {
    throw new Error("FS operation failed 1");
  });
};

await calculateHash();
