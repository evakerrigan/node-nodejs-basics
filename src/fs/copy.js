import fs from "fs/promises";
const copy = async () => {
  const filePath = "./files";
  const filePathCopy = "./files_copy";

  try {
    await fs.access(filePath);
    try {
      await fs.access(filePathCopy);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.mkdir(filePathCopy);
        const files = await fs.readdir(filePath);
        for (const file of files) {
          await fs.copyFile(
            `${filePath}/${file}`,
            `${filePathCopy}/${file}`
          );
        }
      } else {
        throw err;
      }
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
