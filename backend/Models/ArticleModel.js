// Crear modelo de la coleccion de la DB
const { Schema, model } = require('mongoose');

const ArticleSchema = Schema({
    title:{
        type: String,
        required: true
    },
    content:{
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
// Tengo que usar este objecto en controller para usar las funciones de mongodb
module.exports = model("Article", ArticleSchema, 'articles')