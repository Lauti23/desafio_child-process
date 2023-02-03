const express = require("express");
const isAuthenticated = require("../middlewares/middlewares");

const profileRoute = express.Router();

profileRoute
    .get("/", isAuthenticated, (req, res) => {
        res.render("profile")
    })



module.exports = profileRoute