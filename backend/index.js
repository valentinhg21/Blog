const { conexion } = require("./database/connection");
const express = require('express');
const cors = require('cors')
// Conectar a la DB
conexion();

// Crear servidor
const app = express();
const PORT = 4000;
// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json());

// Crear rutas


// Crear servidor y escuchar peticiones HTTP
app.listen(PORT, () => {
    console.log('[SERVER] is on');
})