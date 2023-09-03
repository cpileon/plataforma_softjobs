const jwt = require('jsonwebtoken');
require('dotenv').config();

const chequeoCredenciales = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(401)
      .send({ message: "No se recibieron las credenciales en esta consulta" });
  }
  next()
};

const chequeoToken = (req, res, next) => {
    const token = req.header("Authorization").split("Bearer ")[1];
    console.log(token)


    if (!token)
      throw {
        code: 401,
        message: "Debe incluir el token en las cabeceras (Authorization)",
      };
  
    const tokenValido = jwt.verify(token, process.env.SECRET);
    if (!tokenValido) throw { code: 401, message: "El token es inválido" };
    next();
  };
  

  module.exports = {
    chequeoCredenciales,
    chequeoToken,
  }
