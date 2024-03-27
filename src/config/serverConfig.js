const dotenv  = require('dotenv')  //start reading .env file that what are the variables decleared there 

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    
}