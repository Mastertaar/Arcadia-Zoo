const express = require('express');
const db = require ('./routes/db-config');

const app = express();
const bodyParser = require('body-parser');
const cookie = require('cookie-parser')
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const mysql = require('mysql');

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());

// Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/#contact', (req, res) => {
  res.render('contact', {
    layout: false
  });
  app.locals.layout = false;
});

app.post('/send', (req, res) => {
  const output = `
    <p>Thank you for the question!</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD // naturally, replace both with your real credentials or an application-specific password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  // setup email data 
  let mailOptions = {
    from: req.body.email, // sender address
    to:[
      { name: req.body.name, address:  req.body.email },
      { name: "Romain Pitarque" , address: "mastertaar_97@hotmail.com" },
    ],// list of receivers
    subject: 'Questions about Pitarque Productions!', // Subject line
    html: output // html body
  };
  /*//sql values
  const sql = "insert into people values(null, '" + req.body.name + "', '" + req.body.email + "', '" + req.body.phone + "', '" + req.body.message + "')"
  connection.query(sql, function (err) {
    if (err) throw err 

  })
  connection.end();*/
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.redirect('/');
    }
    
  });
  
});
