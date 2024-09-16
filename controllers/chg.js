const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const chg = async (req, res) => {
    // Clear the userRegistered cookie by setting its expiration to a past date
    const { c_pass, n_pass, cn_pass }= req.body
    if(n_pass != cn_pass) return res.status(402).json({status:"error", error : "Passwords do not match."})
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SEC)
    db.query("SELECT password FROM register WHERE id=?", [decoded.id], async (errr,result)=>{
        if(errr) return res.status(500)
        // console.log(result)
        if(!await bcrypt.compare(c_pass, result[0].password)) return res.status(401).json({status:"error", error : "Wrong Current Password."})
        const newpass = await bcrypt.hash(n_pass, 8)
        console.log(newpass)
        db.query("UPDATE register SET password = ? WHERE id = ?", [newpass,decoded.id], (err)=>{
            if(err) return res.status(500)
            res.cookie("userRegistered", "", {
                expires: new Date(0),
                httpOnly: true
            });
            // Redirect the user to the login page or any other appropriate page
            return res.status(200).json({status : "success", success : "Password Changed Successfully."})
        })
    })
}

module.exports = chg;