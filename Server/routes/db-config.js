const sql = require ('mysql');
let instance = null;
const dotenv = require('dotenv');
dotenv.config();
const connection = sql.createConnection({
  host:process.env.HOST,
  user:process.env.USERNAME,
  password:process.env.PASSWORD,
  database:process.env.DATABASE,
  port: process.env.DB_PORT
})

connection.connect((err) => {
  if(err) {
    console.log(err.message);
  }
    console.log('db' + connection.state);
})



module.exports = connection;