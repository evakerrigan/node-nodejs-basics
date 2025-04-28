import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, "files/fileToWrite.txt");
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  process.stdin.on("end", () => {
    writeStream.end();
  });

  process.stdin.on("error", (error) => {
    throw new Error("FS operation failed:" + error);
  });
};

await write();
