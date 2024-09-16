const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const upd3 = async (req, res)=>{
    const {e_pos, e_org, e_status, e_doj, e_dol, e_dur, be_pos, be_org, be_doj, be_dol, be_dur, area_sp, area_res} = req.body
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SEC)
    // console.log(req.body)
    db.query("UPDATE register SET ? WHERE id=?",[{e_pos:e_pos, e_org:e_org, e_status:e_status, e_doj:e_doj, e_dol:e_dol, e_dur:e_dur, be_pos:be_pos, be_org:be_org, be_doj:be_doj, be_dol:be_dol, be_dur:be_dur, area_sp:area_sp, area_res:area_res},decoded.id], async (err)=>{
        if(err) return res.status(500).json({status : "error", error : "Internal Error"})
        return res.status(200).json({status : "success", success : "Details Updated"})
    })
}

module.exports = upd3