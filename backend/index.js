const { conexion } = require('./Database/connection')
const express = require('express');
const cors = require('cors')

const routes = require('./Routes/articleRoute')

// Conectar a la DB
conexion();

// Crear servidor
const app = express();
const PORT = 4000;
// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json()); //Recibir datos con content-type app/json
app.use(express.urlencoded({extended: true})) //form-urlenconded
// Crear rutas
app.use("/api",routes)

// Crear servidor y escuchar peticiones HTTP
app.listen(PORT, () => {
    console.log('[SERVER] is on');
})