const express = require("express")
const logoutRoute = express.Router()
const passport = require("passport")

logoutRoute.get("/", (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        console.log("Logged Out")
    res.redirect("login")
    })
})



module.exports = logoutRoute