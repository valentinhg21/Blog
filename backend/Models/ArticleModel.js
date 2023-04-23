// Crear modelo de la coleccion de la DB
const { Schema, model } = require('mongoose');

const ArticleSchema = Schema({
    title:{
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        default: ""
    }

})

// model hace referencia al nombre de la coleccion
module.exports = model("article", ArticleSchema)