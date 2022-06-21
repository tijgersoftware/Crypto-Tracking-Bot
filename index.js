import sleep from 'sleep';
import fs from 'fs';
import {create_config, readConfig, checkConfig, UsePreviousConfig, readPairs, readInitialValues} from './config.js';
import {insertData} from './db.js';

export async function fetchCurrencyRate(pair,use,factor) {

    let response = await fetch(`https://api.uphold.com/v0/ticker/${pair}`);
 

 



    if (response.status === 200) {
  
        let data = await response.text();
  
        
        data = await JSON.parse(data);
        let price = data.ask


        if (use!=="initial"){
      
        const initialValueArray=await readInitialValues();
        const initialPrice=initialValueArray.find(el => el.pairs === pair).ask ;
  
        const calculateFactor=initialPrice/price;
        const config = await readConfig();
        if (calculateFactor>1+factor) {
            let percentage=calculateFactor-1;
            percentage= "+"+String(percentage*100)+"%";
    
            await logAlert(initialPrice,price,pair,factor,percentage)

            if (config.database===true){
            await AlertDatabase(initialPrice,price,pair,factor)}
        }
        else if (calculateFactor<1-factor) {
          
            let percentage=1-calculateFactor;
            percentage= "-"+String(percentage*100)+"%";
            await logAlert(initialPrice,price,pair,factor,percentage)
            if (config.database===true){
            await AlertDatabase(initialPrice,price,pair,factor)}
        }
    else{
       // console.log(`price ${calculateFactor} is in allowed range of ${factor*100}%}`);

    }}
  
        return price

    }
    else if (response.status === 429) {
        console.log('Too many requests made');
        console.log('sleep for 60 seconds');
        sleep.msleep(60000);
        await fetchCurrencyRate(pair,use,factor)
    }
    else {
        console.log('error');
    }
}


export async function logAlert(initialPrice,price,pairString,factor,percentage){
    const config = await readConfig();

    const data = {pair:pairString, timestamp: Math.floor(Date.now() / 1000), initial_value: initialPrice, rate:price, fetchInterval:config.fetchInterval, database: config.database, oscillation: factor, refresh:config.refresh, updateAllPairs:config.updateAllPairs, pairsFile:config.pairs}
    console.log(`Timestamp: ${data.timestamp}, Pair: ${data.pair}, Initial Value: ${data.initial_value}, Value Now: ${data.rate}, Percentage: ${percentage} boundary: ${factor*100}%`);
}

export async function AlertDatabase(initialPrice,price,pairString,factor) {
    


    const config = await readConfig();

    const data = {pair:pairString, timestamp: Math.floor(Date.now() / 1000), initial_value: initialPrice, rate:price, fetchInterval:config.fetchInterval, database: config.database, oscillation: factor, refresh:config.refresh, updateAllPairs:config.updateAllPairs, pairsFile:config.pairs}
    await insertData(data);}


    

export async function writeArrayJson(path,array) {
    let json = JSON.stringify(array);
    fs.writeFileSync(path, json);
}


let initialValueArray=[];
export async function fetchInitialValues(pairs,fetchInterval){
    let startInitialFetch;
    for (let i = 0; i < pairs.length; i++) {
      
        let price=await fetchCurrencyRate(pairs[i],"initial");
        if (i===0){
            startInitialFetch=Date.now();
        }
        initialValueArray.push({pairs:pairs[i],
            ask:price});
    }

    writeArrayJson('./initialValues.json',initialValueArray);
    
    await SecondSleep(startInitialFetch,fetchInterval);

};


export async function checkInitialValues(pairs,initialValues) {

    let pairsNotInInitialValues=[];
    for (let i = 0; i < initialValues.length; i++) {
        if (!pairs.includes(initialValues[i].pairs)){
            pairsNotInInitialValues.push(initialValues[i]);
        }
    }
    return pairsNotInInitialValues;
    
}




export async function updatePairsInitialValues () {
  
    let localconfig=await readConfig();

    let pairs=await readPairs(localconfig.pairs);
    const initialValueArray=await readInitialValues();
    const pairsNotInInitialValues= await checkInitialValues(pairs,initialValueArray);


    for (let i = 0; i < pairs.length; i++) { 
        let pair = pairs[i]

        try{
        let initialValue=initialValueArray.find(el => el.pairs === pair).ask;
   
    }
        catch(err){
        let price = await fetchCurrencyRate(pair,"initial");
        initialValueArray.push({pairs:pair,
            ask:price});
    }

    
    }
 
    for (let i = 0; i < pairsNotInInitialValues.length; i++) {
        let pair = pairsNotInInitialValues[i].pairs;
        let index = initialValueArray.findIndex(el => el.pairs === pair);
        initialValueArray.splice(index,1);
    }
    const data= await writeArrayJson('./initialValues.json',initialValueArray);
    return data
        

}


export async function SecondSleep(startFetch,fetchInterval) {
    let endFetch=Date.now()-startFetch;

    let sleepUntil=fetchInterval*1000-endFetch;
    if (sleepUntil>0){
   
    sleep.msleep(sleepUntil);}
    else{
        console.log('already past fetch interval');
    }
}





export async function reloadConfig(config,pairs,previousConfigTime,refresh) {
    if (Date.now()-previousConfigTime>=refresh*60000){
     
         config=await readConfig();
        pairs=await readPairs(config.pairs);
         await updatePairsInitialValues();
         previousConfigTime=Date.now();
        
    }
    return [config,pairs,previousConfigTime];
}




export async function main() {

    

    const currency="USD";
    const config_path='./json/config.json';
    if (await checkConfig()===false){
         await create_config(config_path,currency);
    }
     else {
         if(await UsePreviousConfig()===false){
            
             await create_config(config_path,currency);
        }
      

     }
    
    let config=await readConfig();
    let pairs=await readPairs(config.pairs);
    let previousConfigTime=Date.now();

    







  
    let factor = config.oscillation/100;
    let fetchInterval=config.fetchInterval;




    await fetchInitialValues(pairs,fetchInterval);
 
 
    while (true) {

        
  

        let startFetch
        for (let i = 0; i < pairs.length; i++) {
        await fetchCurrencyRate(pairs[i],"",factor);
        if (i===0){
            startFetch=Date.now();
        }
    }
    await SecondSleep(startFetch,fetchInterval);
    if (config.refresh>0){
    [config,pairs,previousConfigTime]=await reloadConfig(config,pairs,previousConfigTime,config.refresh);
    factor = config.oscillation/100;
    fetchInterval=config.fetchInterval;
      }
    
  



    }
    


    }

    main()


export default {main,fetchCurrencyRate,logAlert,AlertDatabase,writeArrayJson,fetchInitialValues,checkInitialValues,updatePairsInitialValues,SecondSleep,reloadConfig};

