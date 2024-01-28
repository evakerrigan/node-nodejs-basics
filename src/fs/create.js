import fs from "fs/promises";

const create = async () => {
  const filePath = "./files/fresh.txt";
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
