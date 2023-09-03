const express = require('express');
const cors = require("cors");
const jwt = require('jsonwebtoken');

const app = express();
const { registrarUsuario, obtenerDatosDeUsuario, verificarCredenciales } = require("./consultas")
const { chequeoCredenciales, chequeoToken } = require("./middlewares")
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Servidor encendido en puerto ${PORT}`);
})

app.post('/usuarios', chequeoCredenciales, async (req, res) =>{
    try {
        const usuario = req.body;
        await registrarUsuario(usuario)
        return res.send('Usuario registrado')
    } catch (error) {
        res.status(500).send(error)
    }
})

