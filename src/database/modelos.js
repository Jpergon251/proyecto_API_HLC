const path = require('path');
const data = require('./database.json');
const fs = require("fs");

//**** Peticiones jugadores ****

const getJugadores = () => {
  const allJugadores = data.jugadores
  return allJugadores
};

const getJugador = (nombre) => {
    return data.jugadores[nombre]
}


const postJugador = (newJugador) => {
    data.jugadores[newJugador.nombre] = newJugador;

    fs.writeFile(
        "./src/database/database.json",
        JSON.stringify(data,null,2),
        "utf8",
        (err) => {
            throw new Error("Error al escribir")
        }
    )
    return newJugador;
}
const deleteJugador = (nombre) => {
    delete data.jugadores[nombre] 
    return data.jugadores
}
//**** Peticiones partidas ****

const getPartidas = () => {
    const partidas = data.partidas
    return partidas
  };
  
  const getPartida = (id) => {
      return data.partidas[id]
  }
  
  
  const postPartida = (newPartida) => {
      data.partidas[newPartida.idPartida] = newPartida;
  
      fs.writeFile(
          "./src/database/database.json",
          JSON.stringify(data,null,2),
          "utf8",
          (err) => {
              throw new Error("Error al escribir")
          }
      )
      return newPartida;
  }

  const deletePartida = (partida) => {
    delete data.partidas[partida] 
    return data.partidas
  }
//**** Peticiones Juegos *****

const getJuegos = () => {
    const juegos = data.juegos
    return juegos
};

const getJuego = (nombre) => {
    const juego = data.juegos[nombre]
    return juego
}

module.exports = {
    getJugadores,postJugador,getJugador,deleteJugador,
    
    getPartidas,getPartida,postPartida,deletePartida,
    
    getJuegos,getJuego
};