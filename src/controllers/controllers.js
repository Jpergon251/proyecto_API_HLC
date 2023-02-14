const services = require('../services/services')
// **** Controlador de jugadores**** 
const getJugadores = (req,res,next) => {
    const jugadores = services.getJugadores();
    if (!jugadores) {
        res.status(404).send("NO HAY JUGADORES");
        return;
      }
      res.send(jugadores);
}

const postJugador = (req, res, next) => {
    const {nombre, edad} = req.body;
    if(!nombre || !edad) {
        res.status(400).send("FALTAN DATOS")
        return
    }
    const newJugador = services.postJugador(nombre, edad);
    if (!newJugador) {
        res.status(404).send("ENTRADA DUPLICADA");
        return
    }
    res.send(newJugador);
}
const getJugador = (req, res, next) => {
    const {jug} = req.params;
    const jugador = services.getJugador(jug)
    if (!jugador) {
        res.status(404).send("NO EXISTE");
        return;
      }
    res.send(jugador);
}
const deleteJugador = (req, res, next) => {
    const {jug} = req.params;

    const jugador = services.deleteJugador(jug);
    if (!jugador) {
        res.status(404).send("NO ENCONTRADO");
        return;
      }
    res.send(jugador);
}

// **** Controlador partidas ****
const getPartidas= (req, res, next) => {
    const partidas = services.getPartidas();
    if (!partidas) {
        res.status(404).send("NO HAY PARTIDAS");
        return;
      }
      res.send(partidas);
}
const postPartida= (req, res, next) =>{
    const newPartida = services.postPartida();
    if (!newPartida) {
        res.status(404).send("ENTRADA DUPLICADA");
        return
    }
    res.send(newPartida);
}
module.exports = {
    getJugadores,
    postJugador,
    getJugador,
    deleteJugador,
    getPartidas,
    postPartida,
    // getPartida,
    // deletePartida

}