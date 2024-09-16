const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const upd = async (req, res)=>{
    const {adv_num, app_num, post, dept, doa, nationality, gender, mar_status, dob, mid_name, id_proof, fat_name, c_city, c_state, c_country, c_pin, p_city, p_state, p_country, p_pin, mob, mob2, email2, land_mob} = req.body
    if(!req.cookies.userRegistered) return res.status(5000)
    const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SEC)
    // console.log(req.body)
    db.query("UPDATE register SET ? WHERE id=?",[{adv_num:adv_num, app_num:app_num, post:post, dept:dept, doa:doa, nationality:nationality, gender:gender, mar_status:mar_status, dob:dob, mid_name:mid_name, id_proof:id_proof, fat_name:fat_name, c_city:c_city, c_state:c_state, c_country:c_country, c_pin:c_pin, p_city:p_city, p_state:p_state, p_country:p_country, p_pin:p_pin, mob:mob, mob2:mob2, email2:email2, land_mob:land_mob},decoded.id], async (err)=>{
        if(err) return res.status(500).json({status : "error", error : "Internal Error"})
        return res.status(200).json({status : "success", success : "Details Updated"})
    })
}

module.exports = upd