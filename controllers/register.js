const db = require ("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, password:Npassword, role } = req.body
  if(!email || !Npassword || !role) return res.json ({
    status: "error", 
    error: "Merci de rentrer votre email et mot de passe" });
  else {
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
      if (err) throw err;
      if (result[0]) return res.json({ 
        status: "error", error : "Le compte a déjà été enregistré"})
      else {
        const password = await bcrypt.hash(Npassword, 8);
        db.query('INSERT INTO users SET ?', {email: email, password:password, roleId: role}, (error, results) => {
          if (error) throw error;
          return res.json({status: "success", success: "L'utilisateur a été enregistré" })
        })
      }
    })
  }
}

module.exports = register;