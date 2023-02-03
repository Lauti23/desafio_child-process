const express = require("express")
const apiRandomRoute = express.Router();
const { fork } = require("child_process")

apiRandomRoute.get("/", (req, res) => {
    let number = parseInt(req.query.cant)
    if(isNaN(number) || number === 0) {
        number = 100000000
    }
    console.log(number)
    const forked = fork("./src/process/random.process")
    forked.send(number)
    forked.on("message", data => {
        res.render("randoms", {result: data, cantidad: number})
    })
    
})

module.exports = apiRandomRoute