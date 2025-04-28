import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, "files/fileToRead.txt");
  const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("end", () => {
    process.stdout.write("\n");
  });

  readStream.on("error", (error) => {
    process.stdout.write("\nFS operation failed");
  });
};

await read();
