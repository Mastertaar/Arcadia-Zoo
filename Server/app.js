const express = require('express');
const db = require ('./routes/db-config');

const app = express();
const bodyParser = require('body-parser');
const cookie = require('cookie-parser')
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/images", express.static(__dirname + "/public/images"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());



app.use("/", require("./routes/pages"));

app.use("/api", require ("./controllers/auth"));

app.listen(process.env.PORT, () => console.log('app is running'));