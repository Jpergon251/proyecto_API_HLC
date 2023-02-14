const modelos = require("../database/modelos");
const { v1: uuid } = require("uuid");

//**** Servicios Jugadores ****


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
  const jugador = modelos.getJugador(nombre)
  return jugador;
}
const deleteJugador = (nombre) => {
  const jugador = modelos.deleteJugador(nombre);
  return jugador
}

//**** Servicios Partidas ****

const getPartidas = () => {
  const partidas = modelos.getPartidas()
  return partidas

}
const getPartida = (id) => {
  const partida = modelos.getPartida(id)
  return partida 
}
const deletePartida = (id) => {
  const partida = modelos.deletePartida(id)
  return partida 
}
const postPartida = () => {
  var lowerLimit = 600;
  var upperLimit = 3600;
  var range = upperLimit - lowerLimit;

  var randomNumber = Math.floor(Math.random() * (range + 1)) + lowerLimit;

  const duracion = randomNumber
  
  const jugadores =modelos.getJugadores()

  const matriz = Object.values(jugadores)
  
  const seleccion = matriz.sort(() => Math.random() - 0.5).slice(0, 6);

  const objeto_seleccion = Object.fromEntries(
    seleccion.map(elemento => [elemento, jugadores[elemento]])
  );

  const idPartida = uuid()
  const fecha = new Date().toLocaleDateString()
  const finalizada = false

  const newPartida = {
    idPartida,
    fecha,
    finalizada,
    duracion,
    objeto_seleccion
  }

  if (modelos.getPartida(newPartida.idPartida)) {
    return false;
  }
  const insertedPartida = modelos.postPartida(newPartida)
  return insertedPartida;
}
module.exports = {
    getJugadores,
    postJugador,
    getJugador,
    deleteJugador,
    getPartidas,
    getPartida,
    postPartida,
    deletePartida
}