import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const filePath = path.join(__dirname, "files/archive.gz");
  const fileOutPath = path.join(__dirname, "files/fileToCompress111.txt");

  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(fileOutPath);
  const gzip = zlib.createGunzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await decompress();
