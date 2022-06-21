import fs from "../mocks/fs";
import readlineSync from "../mocks/readlineSync";
//import main from "../mocks/main";
//import fetch from "../mocks/node-fetch";

//import fetchMock from "jest-fetch-mock";
import { checkInitialValues, reloadConfig } from "../mocks/index.js"

//import { msleep } from "sleep";
//checkInitialValues(pairs,initialValues)
//fetchMock.mock('https://api.uphold.com/v0/ticker/WBTC-USD', 200);

// global.fetch
// fetchMock.enableMocks();

test('check pairsNotInInitialValues', async () => {
  //fetch.mockResponseOnce(JSON.stringify({status:200}))
    const initialValues =["BTC-USD", "ETH-USD"];
    const pairs = ["BTC-USD", "ETH-USD", "LTC-USD"];
    const result = await checkInitialValues(pairs,initialValues)
    console.log(result, "in test")
    expect(result).toStrictEqual([ 'BTC-USD', 'ETH-USD' ]);
  });

test('should not reload config', async () => {
  // only works on default config
  const config= {"fetchInterval":5,"database":true,"oscillation":0.01,"refresh":0,"updateAllPairs":true,"pairs":"pairs.txt"}
  const pairs = ["WBTC-USD"];
  const previousConfigTime= 1*1000000000000000;
  const result = await reloadConfig(config,pairs,previousConfigTime,config.refresh);
  console.log(result, "in test result reloadConfig")
  var newArr = result.slice(0, -1);
  expect(newArr).toStrictEqual([
    {
      fetchInterval: 5,
      database: true,
      oscillation: 0.01,
      refresh: 0,
      updateAllPairs: true,
      pairs: 'pairs.txt'
    },
    [ 'WBTC-USD' ]
  ]);
});

