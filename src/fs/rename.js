import fs from "fs/promises";

const rename = async () => {
  const sourceFilePath = "./files/wrongFilename.txt";
  const newFilePath = "./files/properFilename.md";

  try {
    await fs.access(sourceFilePath);
    try {
      await fs.access(newFilePath);
      console.log("ЭТОТ ФАЙЛ УЖЕ ЕСТЬ");
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.rename(sourceFilePath, newFilePath);
        console.log("ФАЙЛ ПЕРЕИМЕНОВАН УСПЕШНО");
      } else {
        throw err;
      }
    }
  } catch (err) {
    console.log("ФАЙЛА ИСТОЧНИКА НЕ СУЩЕСТВУЕТ");
    throw new Error("FS operation failed");
  }
};

await rename();
