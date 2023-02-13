const express = require("express")
const router = express.Router()
const controllers = require("../../controllers/controllers")

//URL AQUí: /v1/api/jugadores

router .route("/")
  .get(controllers.getJugadores) //GET ALL PRODUCTS
  .post(); //INSERT ONE PRODUCT

router.route("/:jug")
    .get() //GET ONE PRODUCT
    .delete() //DELETE ONE PRODUCT
    .put() //UPDATE ONE PRODUT



module.exports.router = router