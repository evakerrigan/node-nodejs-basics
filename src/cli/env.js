const parseEnv = () => {
  const envPrefix = "RSS_";
  const envVariables = [];

  for (const key in process.env) {
    if (key.startsWith(envPrefix)) {
      envVariables.push(`${key}=${process.env[key]}`);
    }
  }

  console.log(envVariables.join("; "));
};

parseEnv();
