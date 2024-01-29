import { Transform } from "stream";

const reverseTransform = new Transform({
  transform(chunk, _, callback) {
    callback(null, chunk.toString().split("").reverse().join("") + '\n');
  },
});

const transform = async () => {
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
