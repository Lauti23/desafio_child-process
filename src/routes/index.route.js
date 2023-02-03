const express = require("express");

const indexRoute = express.Router()

indexRoute.get("/", (req, res) => {
    res.render("index")
})


module.exports = indexRoute