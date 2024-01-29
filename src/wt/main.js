import os from "os";
import { fileURLToPath } from "url";
import path from "path";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "worker.js");

const createWorkers = async () => {
  const coresNumber = os.cpus().length;
  const workers = [];

  for (let i = 0; i < coresNumber; i++) {
    const worker = new Worker(filePath, { workerData: 10 + i });
    workers.push(worker);

    worker.on("message", (result) => {
      console.log("received result = ", result);
    });
  }

  const results = await Promise.all(
    workers.map((worker) => {
      return new Promise((resolve, reject) => {
        worker.on("message", (result) => {
          resolve(result);
        });

        worker.on("error", (error) => {
          reject(error);
        });
      });
    })
  );

  return results;
};

const performCalculations = async () => {
  const results = await createWorkers();
  console.log("results = ", results);
};

await performCalculations();
