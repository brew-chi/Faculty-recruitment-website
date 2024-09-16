const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const logout = async (req, res) => {
    // Clear the userRegistered cookie by setting its expiration to a past date
    res.cookie("userRegistered", "", {
        expires: new Date(0),
        httpOnly: true
    });

    // Redirect the user to the login page or any other appropriate page
    return res.status(200).json({status : "success", success : "User Logged Out Successfully."})
}

module.exports = logout;