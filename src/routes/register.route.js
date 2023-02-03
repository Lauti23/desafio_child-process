const express = require("express");
const passport = require("passport");
const registerRoute = express.Router();

registerRoute.get("/", (req, res) => {
    res.render("register")
})

registerRoute.post("/", passport.authenticate("register", {
    successRedirect: "/profile",
    failureRedirect: "/register",
    passReqToCallback: true
}), (req, res) => {
    
})


module.exports = registerRoute