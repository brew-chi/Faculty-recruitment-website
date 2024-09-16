const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const upd4 = async (req, res)=>{
    const {txt1, txt2, txt3, txt4, txt5, txt6} = req.body
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SEC)
    // console.log(req.body)
    db.query("UPDATE register SET ? WHERE id=?",[{txt1:txt1, txt2:txt2, txt3:txt3, txt4:txt4, txt5:txt5, txt6:txt6},decoded.id], async (err)=>{
        if(err) return res.status(500).json({status : "error", error : "Internal Error"})
        return res.status(200).json({status : "success", success : "Details Updated"})
    })
}

module.exports = upd4