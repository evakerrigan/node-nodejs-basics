import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const filePath = path.join(__dirname, "files/fileToCompress.txt");
  const fileOutPath = path.join(__dirname, "files/archive.gz");

  try {
    await fs.promises.access(fileOutPath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      const readStream = fs.createReadStream(filePath);
      const writeStream = fs.createWriteStream(fileOutPath);
      const gzip = zlib.createGzip();

      readStream.pipe(gzip).pipe(writeStream);
    } else {
      throw err;
    }
  }
};

await compress();
