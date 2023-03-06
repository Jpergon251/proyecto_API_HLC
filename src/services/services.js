const modelos = require("../database/modelos");

//**** Servicios Jugadores ****


const getJugadores = () => {
    const jugadores = modelos.getJugadores();
    return jugadores;
  };
const postJugador= (nombre,edad,horasJugadas) => {
  const newJugador = {
    nombre,
    edad,
    horasJugadas
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
const postPartida = (idPartida,
  juego,
  fecha,
  victoria,
  duracion,
  jugadoresPartida) => {
  

  const newPartida = {
    idPartida,
    juego,
    fecha,
    victoria,
    duracion,
    jugadoresPartida
  }

  if (modelos.getPartida(newPartida.idPartida)) {
    return false;
  }
  const insertedPartida = modelos.postPartida(newPartida)
  return insertedPartida;
}

//**** Servicios juegos ****

const getJuegos = () => {
  const juegos = modelos.getJuegos()
  return juegos
}
const getJuego = (nombre) => {
  const juego = modelos.getJuego(nombre)
  return juego
}

module.exports = {
    getJugadores,postJugador,getJugador,deleteJugador,

    getPartidas,getPartida,postPartida,

    getJuegos,getJuego,

}