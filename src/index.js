const express = require('express');
const bodyParser = require('body-parser');


const  cityRepository  = require('./repository/city-repository');
const { PORT } = require('./config/serverConfig.js');


const setupAndStartServer = async () => {

      //create the express object
      const app = express();
-
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true}));

      app.listen(PORT, async ()=>{
        console.log(`server started at PORT ${PORT}`);
        
        const repo = new cityRepository();
        repo.createCity({name: "Bihar Sharif"});
      });
}


setupAndStartServer();  