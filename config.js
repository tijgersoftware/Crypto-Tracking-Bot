import readlineSync from "readline-sync";
import fs from "fs";
import { createTable } from "./db.js";

export async function configDatabase() {
  console.log(
    "Do you want Create a database to store all the alerts generated (e.g. Postgres)? (default=Yes) [Yes/no] "
  );
  let database = readlineSync.question("").toLowerCase();
  if (database == "n" || database == "no") {
    database = false;
  } else {
    try {
      console.log("Do you want to create a NEW Table? (default=No) [Yes/no] ");
      let table =readlineSync.question("").toLowerCase();
      if (table == "y" || table == "yes") {
        
        await createTable();
      }
      else {
        console.log("Using existing table");
    
      }

      database = true;
    } catch (err) {
      console.log("something when wrong when creating the table");
      database = false;
    }
  }

  return database;
}

export async function configRefresh() {
  console.log(
    "Enter a interval to reload pairs from file or configuration (in minutes) [default=0]"
  );

  let refreshRead = readlineSync.question("").toLowerCase();

  let refresh = parseFloat(refreshRead);
  if (isNaN(refresh)) {
    refresh = 0;
  }

  return refresh;
}
export async function configAllPairs(currency) {
  console.log(
    `Do you want to monitor all ${currency} pairs? (default=No) [Yes/no] `
  );
  let allPairs = readlineSync.question("").toLowerCase();
  if (allPairs == "y" || allPairs == "yes") {
    allPairs = true;
  } else {
    allPairs = false;
  }
  return allPairs;
}

export async function configManualPairs() {
  console.log(
    "Enter the pairs you want to monitor seperated by , (e.g. WBTC-USD) [default=WBTC-USD]"
  );
  let pairsRead = readlineSync.question("").toUpperCase();
  let pairs = pairsRead.split(",");

  if (pairsRead == "") {
    pairs = ["WBTC-USD"];
  }

  let pairsString = pairs.join("\n");
  fs.writeFileSync("pairs.txt", pairsString);

  return "pairs.txt";
}

export async function configPairs(currency) {
  let pairs = "";
  let allPairs = await configAllPairs(currency);
  if (allPairs === true) {
    pairs = "allPairs.txt";
  } else {
    pairs = await configManualPairs();
  }
  return pairs;
}

export async function configFetchInterval() {
  console.log(
    "Enter a interval to fetch currency rate (in seconds) [default=5]"
  );
  let fetchIntervalRead = readlineSync.question("").toLowerCase();

  let fetchInterval = parseFloat(fetchIntervalRead);
  if (isNaN(fetchInterval)) {
    fetchInterval = 5.0;
  }

  return fetchInterval;
}

export async function configOscillation() {
  console.log(
    "Enter the price oscillation percentage that is allowed without alert [default=0.01]%"
  );
  let oscillationRead = readlineSync.question("").toLowerCase();

  oscillationRead = oscillationRead.replace("%", "");
  oscillationRead = oscillationRead.replace(" ", "");

  let oscillation = parseFloat(oscillationRead);
  if (isNaN(oscillation)) {
    oscillation = 0.01;
  }
  return oscillation;
}
export async function checkConfig() {
  var config = JSON.parse(fs.readFileSync("./json/config.json"));

  if (Object.entries(config).length === 0) {
    console.log("The json file is empty");
    return false;
  } else {
    console.log("The json file is not empty");
    return true;
  }
}

export async function UpdateAllPairs(currency) {
  console.log(
    "Do you want to update all the pairs in the allPairs.txt file? (default=Yes) [Yes/no] "
  );
  let updateAllPairs = readlineSync.question("").toLowerCase();
  if (updateAllPairs == "n" || updateAllPairs == "no") {
    updateAllPairs = false;
  } else {
    await fetchAllPairs(currency);
    updateAllPairs = true;
  }
  return updateAllPairs;
}

export async function fetchAllPairs(currency) {
  let response = await fetch(`https://api.uphold.com/v0/ticker/${currency}`);

  if (response.status === 200) {
    let data = await response.text();
    data = await JSON.parse(data);
    let pairs = data.map((c) => c.pair);

    async function removeDoublePairs(pairs) {
      pairs = await removeStartWithUSD(pairs);
      for (var i = pairs.length - 1; i >= 0; i--) {
        if (pairs[i].startsWith("USD")) {
          pairs = await findDouble(pairs[i], pairs);
        }
      }

      return pairs;
    }

    async function removeStartWithUSD(pairs) {
      for (var i = pairs.length - 1; i >= 0; i--) {
        if (pairs[i].startsWith("USD-")) {
          pairs.splice(i, 1);
        }
      }
      return pairs;
    }

    async function findDouble(pair, pairs) {
      let pairNoUSD = pair.replace("USD", "");

      let index = pairs.findIndex((element) => element.endsWith(pairNoUSD));
      if (index > -1) {
        if (pairs[index].endsWith("USD")) {
          ///break
        } else {
          pairs.splice(index, 1);
        }
      }
      return pairs;
    }

    pairs = await removeDoublePairs(pairs);

    let pairsString = pairs.join("\n");

    fs.writeFileSync("allPairs.txt", pairsString);

    return pairs;
  } else {
    console.log("error");
  }
}

export async function create_config(config_path, currency) {
  console.log(
    "Your preferences will be saved so that you don't need to answer these questions again."
  );
  console.log(`monitoring ${currency} pairs`);
  const fetchInterval = await configFetchInterval();
  const database = await configDatabase();
  const oscillation = await configOscillation();
  const refresh = await configRefresh();
  const updateAllPairs = await UpdateAllPairs(currency);
  const pairs = await configPairs(currency);
  console.log("pairs to monitor: " + pairs);
  console.log("fetch interval: " + fetchInterval);
  console.log("database: " + database);
  console.log("oscillation: " + oscillation);
  console.log("refresh: " + refresh);
  console.log("updateAllPairs: " + updateAllPairs);

  const config = {
    fetchInterval: fetchInterval,
    database: database,
    oscillation: oscillation,
    refresh: refresh,
    updateAllPairs: updateAllPairs,
    pairs: pairs,
  };

  const data = await JSON.stringify(config);

  fs.writeFileSync(config_path, data);
}

export async function readConfig() {
  const config = JSON.parse(fs.readFileSync("./json/config.json"));
  return config;
}

export async function readInitialValues() {
  const initialValues = JSON.parse(fs.readFileSync("./initialValues.json"));
  return initialValues;
}

export async function readPairs(pairs) {
  const pairsString = fs.readFileSync(`./${pairs}`, "utf8");

  const pairsArray = pairsString.split("\n");
  return pairsArray;
}

export async function UsePreviousConfig() {
  console.log(
    "Do you want use your previously set configuration? (default=Yes) [Yes/no] "
  );
  let pConfig = readlineSync.question("").toLowerCase();
  if (pConfig == "n" || pConfig == "no") {
    pConfig = false;
  } else {
    pConfig = true;
  }

  return pConfig;
}

export default {
  create_config,
  readConfig,
  checkConfig,
  UsePreviousConfig,
  readPairs,
  readInitialValues,
};
