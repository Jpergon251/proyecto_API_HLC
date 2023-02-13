const modelos = require("../database/modelos");
const { v1: uuid } = require("uuid");

const getJugadores = () => {
    const jugadores = modelos.getJugadores();
    return jugadores;
  };
const postJugador= (nombre,edad) => {

  var lowerLimit = 500;
  var upperLimit = 10000;
  var range = upperLimit - lowerLimit;

  var randomNumber = Math.floor(Math.random() * (range + 1)) + lowerLimit;

  const horasJugadas = randomNumber;

  const newJugador = {
    nombre,
    edad,
    horasJugadas,
  }

  if (modelos.getJugador(newJugador.nombre)) {
    return false;
  }
  const insertedJugador = modelos.postJugador(newJugador)
  return insertedJugador;
};

const getJugador = (nombre) => {
  const oneJugador = modelos.getJugador(nombre)
  return oneJugador;
}
module.exports = {
    getJugadores,
    postJugador,
    getJugador
}