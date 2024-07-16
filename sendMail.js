const nodemailer = require("nodemailer");
require ("dotenv").config();
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465(deprecated), `false` for all other ports
  auth: {
    user: process.env.USER, //Sender Gmail address
    pass: process.env.APP_PASSWORD, //app password from Gmail account
  },
});

const mailOptions = {
  from: {
    name: 'Mastertaar',
    address: process.env.USER
  }, // sender address
  to: ["romain.tierradelenguas@gmail.com"], // list of receivers
  subject: "Send email using nodemailer & gmail ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
  //cc: []
  attachments: [
    {
      filename: 'Test.pdf',
      path: path.join(__dirname, 'Test.pdf'),
      contentType: 'application/pdf'
    },
    {
      filename: 'sample.jpg',
      path: path.join(__dirname, 'sample.jpg'),
      contentType: 'image/jpg'
    },
  ]
}

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions)
    console.log('L\'email a été envoyé')
  } catch (error) {
    console.log(error);
  }
}

sendMail(transporter, mailOptions); //type in console "node .\sendMail.js" to send an email