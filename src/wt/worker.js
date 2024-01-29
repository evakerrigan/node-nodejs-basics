import { parentPort, workerData } from "worker_threads";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// const myNumber = (n) => (n < 2 ? 25 : n);

const sendResult = (data) => {
  console.log("workerData = ", workerData);

  const result = nthFibonacci(data);
  // const result = myNumber(data);
  parentPort.postMessage(result);
};

parentPort.on("message", (data) => {
  sendResult(data);
});

sendResult(workerData);
