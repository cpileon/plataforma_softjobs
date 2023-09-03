const pool = require("./conexion")
const bcrypt = require("bcryptjs")

const registrarUsuario = async (usuario) => {
    let { email, password, rol, lenguage } = usuario
    const passwordEncriptada = bcrypt.hashSync(password)
    password = passwordEncriptada
    try{
        const values = [email, passwordEncriptada, rol, lenguage]
        const consultas = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)"
        await pool.query(consultas, values)
    } catch (error){
        console.log(error)
    }

};



module.exports = {
    registrarUsuario
}