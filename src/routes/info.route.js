const express = require("express");
const infoRouter = express.Router();

let data = {
    A: {
        titulo: "Argumentos de entrada",
        descripcion: process.argv,
    },
    B: {
        titulo: "Sistema operativo",
        descripcion: process.platform,
    },
    C: {
        titulo: "Version Node.js",
        descripcion: process.version,
    },
    D: {
        titulo: "Memoria total reservada(rss)",
        descripcion: process.memoryUsage().rss,
    },
    E: {
        titulo: "Path de ejecución",
        descripcion: process.execPath,
    },
    F: {
        titulo: "Process id",
        descripcion: process.pid,
    },
    G: {
        titulo: "Carpeta del proyecto",
        descripcion: process.cwd(),
    },
};



infoRouter.get("/", (req, res) => {
    console.log(data)
    res.render("info", {data: data})
})


module.exports = infoRouter