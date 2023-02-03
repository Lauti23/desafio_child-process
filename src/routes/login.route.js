const express = require("express");
const passport = require("passport");
const loginRoute = express.Router()

loginRoute.get("/", (req, res) => {
    res.render("login")
})

loginRoute.post("/", passport.authenticate("login", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    passReqToCallback: true
}), (req, res) => {

})

module.exports = loginRoute 