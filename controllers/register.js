const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")

const register = async (req, res)=>{
    const {first_name, last_name, category, email, password, retype_pass} = req.body
    if(!email || !first_name || !last_name || !password || !category || !retype_pass) return res.status(403).json({status : "error", error : "Please Enter all the credentials carefully."})
    if(password != retype_pass) return res.status(402).json({status : "error", error : "Passwords do not match."})
    else{
        console.log(email)
        db.query("SELECT email FROM register WHERE email = ?", [email], async (err, result)=>{
            if(err) throw err
            if(result[0]) return res.status(401).json({status : "error", error : "Email-ID has already been Registered."})
            else{
                const rmpass = await bcrypt.hash(password, 8)
                console.log(rmpass)
                db.query("INSERT INTO register SET ?", {first_name: first_name, last_name: last_name, category: category, email: email, password: rmpass}, (error,results)=>{
                    if(error) throw error
                    // res.redirect("/facpanel")
                    return res.status(200).json({status : "success", success: "User has been Registered"})
                })
            }
        })
    }
}

module.exports = register