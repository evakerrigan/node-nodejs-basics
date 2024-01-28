import fs from "fs/promises";

const remove = async () => {
  const filePath = "./files/fileToRemove.txt";

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
    console.log("ФАЙЛ УДАЛЕН");
  } catch (err) {
    console.log("ФАЙЛА НЕ СУЩЕСТВУЕТ");
    throw new Error("FS operation failed");
  }
};

await remove();
