const mongoose  = require('mongoose');


const BASE_URL = 'mongodb://127.0.0.1:27017/blog'

const conexion = async () => {
    try{
        await mongoose.connect(BASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a la DB');
    }catch(error){
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos.")
    }
}

module.exports = {
    conexion 
}