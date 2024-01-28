// import { parentPort, workerData, Worker } from 'worker_threads';

// const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// const sendResult = (data) => {
//   const result = nthFibonacci(data);

//   if (parentPort) {
//     parentPort.postMessage(result);
//   }

//   const worker = new Worker("./worker.js", { workerData: 10 });

//   worker.on("message", (result) => {
//     console.log("Result:", result); // Результат будет выведен в консоль основного потока
//   });
// };

// sendResult(workerData);

import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (data) => {
  const result = nthFibonacci(data);

  if (parentPort) {
    parentPort.postMessage(result);
  }
};

sendResult(workerData);
