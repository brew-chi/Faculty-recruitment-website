const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = async(req, res)=>{
    const { email, password } = req.body
    // console.log(req.body)
    if(!email || !password) return res.json({status : "error", error : "Please enter all the details Carefully."})
    else{
        db.query("SELECT * FROM register WHERE email = ?", [email], async(err, result)=>{
            if(err) throw err
            if(!result.length || !await bcrypt.compare(password, result[0].password)){
                return res.status(401).json({status : "error", error : "Incorrect Email or Password."})
            }
            else {
                const token = jwt.sign({id: result[0].id}, process.env.JWT_SEC, {
                    expiresIn: process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000),
                    httpOnly: true
                }
                res.cookie("userRegistered", token, cookieOptions)
                return res.status(200).json({status : "success", success: "User has been Logged in."})
            }
        })
    }
}

module.exports = login