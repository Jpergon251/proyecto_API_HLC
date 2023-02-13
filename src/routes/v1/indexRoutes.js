const express = require("express");
const router = express.Router()
const routes = require("./routes")

//URL AQUÍ: /v1/api
router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})
router.use("/jugadores", routes.router)

module.exports.router = router