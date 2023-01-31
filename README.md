# Crypto tracking Bot

# Assessment Challenge

## Phase 1 

The bot is able to fetch WBTC-USD exchange rate every 5 seconds from the ticker api. USD is the currency used. The bot retrieves the ask values of the asked pair. The pair string (WBTC-USD, ...) is stored in a text file (pairs.txt). The initial values get fetched and stored in a json file for comparison with the fetched values. The bot will alert you if the price goes up or below a boundary percentage on the initial value. This oscillation percentage is set by default to 0.01%.

## Phase 2 

### ● Handle multiple currency pairs at the same time.

The bot can handle multiple currency pairs, simply add multiple pairs separated by a comma (","). The bot is able to fetch all currency pairs the USD ticker supports. The pairs get sorted, so it only contains pairs in format " currency/USD ". The bot will reach the rate limit of the api, the bot responds by waiting 60 seconds and retrying the same request until successfully. When using the option to retrieve all currency pairs, the pairs get fetched from the api and will be stored in a file AllPairs.txt. When manual adding the pairs, then pairs will be stored in the pairs.txt file.

### ● Accept all the parameters (currency pairs, fetch interval, price oscillation percentage,etc.) as arguments.

When setting up the bot, The bot will ask you configuration questions that accept all the parameters as arguments.

### fetch interval:

    Enter a interval to fetch currency rate (in seconds) [default=5]

### price oscillation percentage:

    Enter the price oscillation percentage that is allowed without alert [default=0.01]%

### currency pairs:

    Enter the pairs you want to monitor separated by , (e.g. WBTC-USD)[default=WBTC-USD]

### ● Create a test suite for your code (e.g. jest or mocha).

I have created a test suite for the database integration and some of the index.js functions using jest. If I needed to develop this bot further to production. I would increase coverage by adding test suites for the index.js and the configuration.js files. I would use the mocked functions in mock folder to accomplish this using jest.

## Phase 3 

### ● Dockerize your application.

The bot is dockerize in 2 containers. The first container contains the bot (uphold-bot-server-1), the second container contains the Postgres database(uphold-bot-db-1). The 2 containers communicate using a network. This architecture improves the security of the communication between the containers by eliminating the use of ports.

### ● Create a database to store all the alerts generated (e.g. Postgres).

When configured a database is required the bot will create a table to store all alerts in a Postgres database The default behavior is to create a table although it is optional asked in the configuration questions. Be aware that the database only works when the project is setup with docker.

## Phase 4 (Extra features not included in assignment)

    Do you want Create a database to store all the alerts generated (e.g. Postgres)? (default=Yes) [Yes/no]

    Do you want to create a NEW Table? (default=No) [Yes/no]

You are able to remove all data stored in the database and start with a new table.

    Enter a interval to reload pairs from file or configuration (in minute) [default=0]

When you have enabled this feature by setting a number x>0. The program will reload the bot config file and pairs.txt file every x minutes. By enabling this feature you are able to change the configuration in pairs.txt and config.json by typing  
 ` nano pairs.txt `
or
` nano json/config.json `
in a new terminal. You can change the files while the bot keeps running.

    Do you want to update all the pairs in the allPairs.txt file? (default=Yes) [Yes/no]

    Do you want to monitor all USD pairs? (default=No) [Yes/no]
    ```

Last extra feature makes it possible to monitor all pairs supported by the api. sorted on USD so that all pairs values can be compared.

# Demo
You can find the demo video of phase 1, 2 and 3 under the folder demo.

# Setup instructions

## Prerequisites

- docker
- docker compose

all other dependencies will be automatically downloaded inside the docker containers.

if you don't have docker please install for your specific operating system using the docker documentation

https://docs.docker.com/get-docker/

## Setup

build the docker containers:

```
sudo docker compose up -d
```

### bot:

enter the bots container:

```
sudo docker exec -it uphold-bot-server-1 /bin/bash
```

start the bot:

```
npm start
```

### database:

open a new terminal

enter the database container:

```
sudo docker exec -it uphold-bot-db-1 psql -U docker
```

View all stored alerts in Postgres database

```
select * from alerts;
```

### Teardown containers

```
sudo docker compose down
```

### Rebuild containers

```
sudo docker compose up -d --build
```

### test

```
npm test
```

