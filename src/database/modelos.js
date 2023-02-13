const path = require('path');
const data = require('./database.json');
const fs = require("fs");

// Definir una ruta para manejar solicitudes GET al archivo JSON
const getJugadores = () => {
  const allJugadores = data.jugadores
  return allJugadores
};

const getJugador = (nombre) => {
    return data.jugadores[nombre]
}


const postJugador = (newJugador) => {
    data.jugadores[newJugador] = newJugador;

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

// Exportar el router para que pueda ser utilizado en otro lugar de la aplicación
module.exports = {
    getJugadores,
    postJugador
};