const dotenv = require('dotenv');
dotenv.config();
const config = {
    connection : process.env.DATABASE_CONNECTION
};

module.exports = config;