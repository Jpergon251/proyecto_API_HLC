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
    const {nombre, edad, horasJugadas} = req.body;
    if(!nombre || !edad || !horasJugadas) {
        res.status(400).send("FALTAN DATOS")
        return
    }
    const newJugador = services.postJugador(nombre, edad, horasJugadas);
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
    const { idPartida, juego, fecha, victoria, duracion, jugadoresPartida} = req.body;

    if(!idPartida || !juego || !fecha || !victoria || !duracion || !jugadoresPartida) {
        res.status(400).send("FALTAN DATOS")
        return
    }

    const newPartida = services.postPartida(idPartida, juego, fecha, victoria, duracion, jugadoresPartida);
    if (!newPartida) {
        res.status(404).send("ENTRADA DUPLICADA");
        return
    }
    res.send(newPartida);
}
const getPartida = (req, res, next) =>{
    const {part} = req.params
    const partida = services.getPartida(part)

    if (!partida){
        res.status(404).send("NO HAY PARTIDA")
        return
    }
    res.send(partida)
}

// **** Controllers Juegos ****

const getJuegos = (req, res, next) => {
    const juegos = services.getJuegos();
    if (!juegos) {
        res.status(404).send("NO HAY JUEGOS");
        return;
      }
      res.send(juegos);
}
const getJuego = (req,res,next) => {
    const {game} = req.params
    const juego = services.getJuego(game)

    if (!juego){
        res.status(404).send("NO HAY JUEGO")
        return
    }
    res.send(juego)
}
module.exports = {
    getJugadores,postJugador,getJugador,deleteJugador,
    
    getPartidas,postPartida,getPartida,

    getJuegos,getJuego

}