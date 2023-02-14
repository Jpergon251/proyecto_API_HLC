const authenticationService = require('../services/authenticationService')

const login = (req , res, next) => {

    const {email, password} = req.body
    const {cookies} = req

    if (!email && !password && !cookies.sessionId) {
        res.status(401).send({mensaje: 'No autorizado'})
    }
    if (email && password) {
        const credenciales = {
            email,
            password
        }
        const idUserLogueado = authenticationService.checkUser(credenciales)
        if(!idUserLogueado) {
            res.status(401).send({mensaje: 'No autorizado'})
            return;
        }
        const sessionId = authenticationService.generateSessionId(idUserLogueado)
        req.cookie("sessionId", {httpOnly: true })
        next()
    }
}

module.exports ={
    login
}