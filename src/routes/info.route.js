const express = require("express");
const infoRouter = express.Router();

let data = [
    {
        titulo: "Argumentos de entrada",
        descripcion: process.argv,
    },
    {
        titulo: "Sistema operativo",
        descripcion: process.platform,
    },
    {
        titulo: "Version Node.js",
        descripcion: process.version,
    },
    {
        titulo: "Memoria total reservada(rss)",
        descripcion: process.memoryUsage().rss,
    },
    {
        titulo: "Path de ejecución",
        descripcion: process.execPath,
    },
    {
        titulo: "Process id",
        descripcion: process.pid,
    },
    {
        titulo: "Carpeta del proyecto",
        descripcion: process.cwd(),
    }
];



infoRouter.get("/", (req, res) => {
    res.render("info", {data: data})
})


module.exports = infoRouter