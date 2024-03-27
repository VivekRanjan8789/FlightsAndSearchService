# welcome to Flights Service

## project setup
- clone the project on your local
- execute `npm-install` on the same path as of your root directory of downloaded project
- create a `.env` file in the root directory and add the following environment variqbles
    - `PORT = 3000`
- inside the `src/config` folder create a new file `config.json` and then add the following pieces of json

```
   {
  "development": {
    "username": <YOYR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_LOGIN_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql" 
      }
   }

```

`once you've added your db config as listed above, go to your source folder from your terminal and execute 'npx sequelize db:create'`