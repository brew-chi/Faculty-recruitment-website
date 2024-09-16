const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const usd = (req, res) => {
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SEC)
    db.query("SELECT * FROM register WHERE id=?", [decoded.id], (err, result)=>{
        if(err) return
        else{
            console.log(result[0])
            res.json(result[0])
        }
    })
}

module.exports = usd;