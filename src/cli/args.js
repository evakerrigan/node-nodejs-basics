const parseArgs = () => {
  const cliArgs = process.argv.slice(2);

  const args = [];

  for (let i = 0; i < cliArgs.length; i += 2) {
    const propName = cliArgs[i].slice(2);
    const value = cliArgs[i + 1];
    args.push(`${propName} is ${value}`);
  }

  console.log(args.join(", "));
};

parseArgs();
