const service = require("../services/usuarioService")
const moment = require("moment")
const jwt = require("jwt-simple")
const bcrypt = require("bcryptjs")


// Creamos la funcion que nos generara el token, para ello tendremos que pasar la informacion del usuario
const createToken = (userInfo) => {
    // el objeto payload tendra tanto la informacion del usuario como la fecha de creacion como la de expiracion del token
    let payload = {
        userId: userInfo.id,
        userMail: userInfo.email,
        // con moment().unix() obtendremos la fecha en segundos desde 1970
        createdAt: moment().unix(),
        // con moment().add indicaremos el tiempo que queremos añadir, si queremos que sean minutos pondremos minutes y lo pasaremos a formato unix
        dateExp: moment().add(700, "minutes").unix()
    }
    // retornamos el token generado con jwt.encode al que le pasaremos el objeto que queremos cifrar y una clave secreta
    return jwt.encode(payload, "secreto");
}

// creamos la funcion del login donde pasaremos tanto la request como la respuesta
const login = async (req, res) => {
    // a la hora de realizar las consultas es recomendable usar try/catch
    try {
        // Realizamos la consulta que nos devolvera la informacion del usuario siempre y cuando exista dicho usuario
        const user = await service.login(req.body.email);
        // comprobamos que existe el usuario
        if (user) {
            // ahora tendremos que comparar las contraseñas para ello usaremos bcrypt.compareSync al que le pasaremos la contraseña introducida y la contraseña guardada en la base de datos
            const isCorrectPass = bcrypt.compareSync(req.body.contrasena, user[0][0].contrasena)
            // comprobamos que las contraseñas existen
            if (isCorrectPass) {
                // si coinciden crearemos el token con la informacion del usuario y la clave
                res.send({ success: createToken(user[0][0]) })
            } else {
                res.send("contraseña incorrecta")
            }
        } else {
            res.send("usuario incorrecta")
        }
    } catch (error) {
        res.send(error)
    }

}

const register = async (req, res) => {
    try {
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            email: req.body.email,
            contrasena: bcrypt.hashSync(req.body.contrasena, 10),
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            rol: req.body.rol,
        }
        const usuario = await service.register(user)
        res.json(usuario);
    } catch (error) {
        res.json("error al registrar")
    }
}
module.exports = { login, register }