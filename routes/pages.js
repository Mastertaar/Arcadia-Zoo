const express = require("express");
const router = express.Router();
const loggedIn = require ("../controllers/loggedIn");
const logout = require("../controllers/logout");




//Home route
router.get("/", loggedIn, (req, res) => {

  const locals = {
    title: 'Zoo Arcadia',
    description: 'Totally dynamic Zoo app'
  }

  if (req.user) {
    res.render("index", { locals, status : "loggedIn", user: req.user})
  }else {
    res.render("index", {  locals, status : "no", user: "nothing"})
  }
})


//Dashboard routes
router.get("/dashboard", loggedIn, (req, res) => {

  const locals = {
    title: 'Dashboard',
    description: 'Totally dynamic Zoo dashboard'
  }

  if (req.user) {
    res.render("dashboard", { locals, status : "loggedIn", user: req.user})
  }else {
    res.render("index", {  locals, status : "no", user: "nothing"})
  }
})

router.get('/dashboard/addCustomer', loggedIn, (req,res) => {

  const locals = {
    title: 'Add Customer',
    description: 'Totally dynamic Zoo dashboard'
  }

  if (req.user) {
    res.render("customer/addCustomer", { locals, status : "loggedIn", user: req.user})
  }else {
    res.render("index", {  locals, status : "no", user: "nothing"})
  }
}

)

//Post routes
router.post("addCustomer", loggedIn, (req,res) => {
  
  console.log(req.body);
  
  const locals = {
    title: 'New Customer Added!',
    description : 'Totally dynamic Zoo dashboard'
  }

  if (req.user) {
    res.render("customer/addCustomer", { locals, status : "loggedIn", user: req.user});
  } else {
    res.render("index", {  locals, status : "no", user: "nothing"})
  }
}

);



//Static files routes
router.get("/register", (req, res) => {
  res.sendFile("register.html", {root:"./public"});
})

router.get("/login", (req, res) => {
  res.sendFile("login.html", {root:"./public"});
})

router.get("/elephants", (req, res) => {
  res.sendFile("elephants.html", {root:"./public"});
})
router.get("/veto", (req, res) => {
  res.sendFile("veto.html", {root:"./public"});
})

router.get("/logout", logout)

router.get('*', (req,res) => {
  res.status(404).send(
    '<h1>Page not found on the server</h1>');
})

module.exports = router;