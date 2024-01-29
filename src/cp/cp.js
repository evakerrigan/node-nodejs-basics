import { spawn } from 'child_process';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const child = spawn('node', [filePath, ...args], {
    stdio: ['pipe', 'pipe', process.stderr, 'ipc']
  });

  // Перенаправляем входные данные главного процесса в дочерний процесс
  process.stdin.pipe(child.stdin);

  // Перенаправляем вывод данных дочернего процесса в главный процесс
  child.stdout.pipe(process.stdout);

//   child.stdout.on('data', (data) => {
//     process.stdout.write(data);
//   });

//   child.on('exit', (code, signal) => {
//     console.log(`Child process exited with code ${code} and signal ${signal}`);
//   });



};

// Протестируйте функцию, передав в нее массив аргументов
// spawnChildProcess(['argument1', 'argument2', 'argument3']);

spawnChildProcess([5, 8, 1]);
