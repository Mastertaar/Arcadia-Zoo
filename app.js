const express = require('express');
const connection = require ('./routes/db-config');

const app = express();
const bodyParser = require('body-parser');
const cookie = require('cookie-parser')
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const PORT = process.env.PORT || 5000;
app.use(cors());
const authRole = require('./controllers/middlewares')

app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use("/imagesVet", express.static(__dirname + "/public/imagesVet"));


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());



app.use("/", require("./routes/pages"));

app.use("/api", require ("./controllers/auth"));

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

//Auth Role Middleware
/*app.get("/public/veto", authRole(["vet", "admin"]), (req,res) => {
  res.json({
    next
  })
})*/



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
      rejectUnauthorized: true
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
  //sql values
  const sql = "insert into people (name, email, phone, message) values('" + req.body.name + "', '" + req.body.email + "', '" + req.body.phone + "', '" + req.body.message + "')"
  connection.query(sql, function (err) {
    if (err) throw err 

  })
  connection.end();
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.send(
        '<section style="display:flex; align-items:center; justify-content:center;"><div style="margin-top:12%"><a style="font-size:50px; text-decoration:none; color:#ff6e01;"href="/">Votre message a été envoyé<br>Cliquez pour retourner à l\'accueil</a><div><section>');
    }
    
  });
  
});

app.listen(PORT, () => console.log('app is running'));