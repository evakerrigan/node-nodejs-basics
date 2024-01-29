import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const child = spawn("node", [filePath, ...args], {
    stdio: ["pipe", "pipe", process.stderr, "ipc"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  child.on("exit", (code, signal) => {
    process.stdout.write(
      `Child process exited with code ${code} and signal ${signal}\n`
    );
  });
};

spawnChildProcess(["Beautiful", "day!"]);

export default spawnChildProcess;
