const express = require("express")
const router = express.Router()
const controllers = require("../../controllers/controllers")

//URL AQUí: /v1/api/jugadores

router.route("/jugadores")
  .get(controllers.getJugadores) //GET ALL PRODUCTS
  .post(controllers.postJugador); //INSERT ONE PRODUCT
router.route("/partidas")
  .get(controllers.getPartidas) //GET PARTIDAS)
  .post(controllers.postPartida); //INSERT PARTIDA)

  
router.route("/:jug")
    .get(controllers.getJugador) //GET ONE PRODUCT
    .delete(controllers.deleteJugador) //DELETE ONE PRODUCT
    .put() //UPDATE ONE PRODUT

router.route("/:part")
    .get()
    .delete()
    .put()


module.exports.router = router