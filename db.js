import knex from "knex";

const db = knex({
  client: "postgres",
  connection: {
    host: "db",
    user: "docker",
    password: "123456",
    database: "docker",
  },
});

export async function createTable() {
  try {
    console.log("going to create a new table");
    await db.schema.dropTableIfExists("alerts");
    await db.schema.withSchema("public").createTable("alerts", (table) => {
      table.increments("id");
      table.float("timestamp");
      table.string("pair");
      table.float("initial_value");
      table.float("rate");
      table.float("fetchInterval");
      table.boolean("database");
      table.float("oscillation");
      table.float("refresh");
      table.boolean("updateAllPairs");
      table.string("pairsFile");
    });
    console.log("Created alerts table!");
  } catch (err) {
    console.log(err);
  }
}

export async function insertData(data) {
  try {
    await db("alerts").insert({
      pair: data.pair,
      timestamp: data.timestamp,
      initial_value: data.initial_value,
      rate: data.rate,
      fetchInterval: data.fetchInterval,
      database: data.database,
      oscillation: data.oscillation,
      refresh: data.refresh,
      updateAllPairs: data.updateAllPairs,
      pairsFile: data.pairsFile,
    });
  } catch (err) {
    console.log(err);
  }
}

export default { insertData, createTable };
