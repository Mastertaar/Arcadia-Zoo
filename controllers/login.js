const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const {role, email, password} = req.body;
  if(!role || !email || !password) return res.json ({
    status: "error", 
    error: "Merci de rentrer votre rôle, email et mot de passe" });
    else {
      db.query('SELECT * FROM users WHERE email = ? AND role = ?', [email], [role], async (Err, result) => {
        if(Err) throw Err;
        if (!result.length || !await bcrypt.compare(password, result[0].password)) return res.json({status: "error",
          error: "Email ou mot de passe incorrect"
        })
        else {
          const token = jwt.sign({id :result[0].id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
          })
          const cookieOptions ={
            expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
          }
          res.cookie("userRegistered", token, cookieOptions);
          return res.json({status: "success", success: "L'utilisateur est connecté"});
        }
      })
    }
}
module.exports = login;