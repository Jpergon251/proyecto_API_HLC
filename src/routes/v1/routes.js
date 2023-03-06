const express = require("express")
const router = express.Router()
const controllers = require("../../controllers/controllers")

//URL AQUí: /v1/api/jugadores

router.route("/jugadores")
  .get(controllers.getJugadores) //GET ALL PRODUCTS
  .post(controllers.postJugador); //INSERT ONE PRODUCT

  
router.route("/jugadores/:jug")
    .get(controllers.getJugador) //GET ONE PRODUCT
    .delete(controllers.deleteJugador) //DELETE ONE PRODUCT
    .put() //UPDATE ONE PRODUT

router.route("/partidas")
  .get(controllers.getPartidas) //GET PARTIDAS)
  .post(controllers.postPartida); //INSERT PARTIDA)
  

router.route("/partidas/:part")
    .get(controllers.getPartida)
    .delete(controllers.deletePartida); 

router.route("/juegos")
  .get(controllers.getJuegos);

router.route("/juegos/:game")
  .get(controllers.getJuego)
module.exports.router = router