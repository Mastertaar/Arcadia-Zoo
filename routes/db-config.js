const mysql = require ('mysql');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection
({
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

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});


/*connection.end();*/

module.exports = connection;