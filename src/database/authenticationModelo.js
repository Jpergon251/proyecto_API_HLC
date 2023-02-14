const usuarios = require("./users.json")

const checkUser = (email, password) => {
    const ususario = usuarios.users.find(
        (usu)=> usu.email ===email && usu.password ===password
        
    )
    return usuario
}

const checkSession = (id_usuario) =>{
    const sessionId = sessions.sessions.find(
        (sess) => sess.id === id_usuario
    )
    return sessionId;
}
const addSession = (id, sessionId) => {
    sessions.sessions.push({ id, sessionId});
    fs.writeFile(
        "./src/database/sessions.json",
        JSON.stringify(sessions, null, 2),
        "utf8"
    );
}
module.exports = {
    checkUser
}