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
}
module.exports = {
    getJugadores
}