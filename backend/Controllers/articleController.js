
// Article this is object where i have all the functions mongoose
const Article = require("../Models/ArticleModel")
const { articleValidate } = require("../Helpers/Helpers")
const fs = require("fs")
const path = require("path")
// Create Article
const createArticle =  (req, res) => {
    let messageValidate = "Faltan agregar datos."
    let messageError = "No se pudo crear el articulo."

    articleValidate(res, req.body, messageValidate, messageError);

    // Create object
    const article = new Article(req.body)

    // Save article in DB
    article.save()
    .then((article) => {
        if(article){
            return res.status(200).json({
                status: "success",
                message: `Se guardo correctamente.`,
                article: article
            })
        }

    })
    .catch((err) => {
        return res.status(400).json({
            status: "error",
            message: `No se pudo guardar el articulo en la db` 
        })
    })

}

// Get all Article
const getArticles = (req, res ) => {

    let query = Article.find()
    if(req.params.limit){
        query.limit(req.params.limit)
    }
    if(req.params.orderby){
        let order = req.params.orderby.toLowerCase();
        if(order === 'asc'){
            query.sort({date: -1})
        }else{
            query.sort({date: 1})
        }
    
    }
    query.then((articles) => {
        if(articles){
            return res.status(200).json({
                status: "success",
                count: articles.length,
                articles
            })
        }

    })
    .catch((err) => {
        return res.status(400).json({
            status: "error",
            message: `No se encontraron articulos en la db` 
        })
    })

}

const getArticle = (req, res ) => {
   let id = req.params.id

   let query = Article.findById(id)
   
   query.then((article) => {
        if(article){
            return res.status(200).json({
                status: "success",
                article
            })
        }
   })
   .catch((err) => {
            return res.status(400).json({
            status: "error",
            message: `No se encontraró el articulo` 
        })
   })

}

const deleteArticle = (req, res) => {
    let id = req.params.id

    let query = Article.findOneAndDelete({_id: id})
    
    query.then((article) => {
         if(article){
             return res.status(200).json({
                 status: "success",
                 article: article,
                 message: 'El articulo se elimino'
             })
         }
    })
    .catch((err) => {
             return res.status(400).json({
             status: "error",
             message: `No se pudo eliminar el articulo.` 
         })
    })
}


const editArticle = (req, res) => {
    let id = req.params.id

    let messageValidate = "Faltan agregar datos."
    let messageError = "No se pudo actualizar el articulo."

    articleValidate(res, req.body, messageValidate, messageError);

    // Update article
    const query = Article.findByIdAndUpdate({_id: id},req.body, {new: true} )
    query.then((article) => {
        if(article){
            return res.status(200).json({
                status: "success",
                article,
                message: 'El articulo se actualizo'
            })
        }
    })
    .catch((err) => {
        return res.status(400).json({
            status: "error",
            message: `No se encontre el articulo para actualizar.` 
        })
    })



    // Save article in DB


}


const upload = (req, res ) => {

    if(!req.file && !req.files){
        return res.status(400).json({
            status: "error",
            message:  "Peticion invalida"
        })
    }
    // Nombre del archivo
    let fileName = req.file.originalname
    // Extension del archivo
    let file_split = fileName.split("\.");
    let file_extension = file_split[1]
    // Comprobar extension correcta
    if(file_extension  != "png" && 
    file_extension != "jpg" && 
    file_extension != "jpeg" 
    && file_extension != "gif"
    ){
        // Borrar archivo y dar respuesta
        fs.unlink(req.file.path, (err) => {
            return res.status(400).json({
                status: "error",
                message:  "Imagen no valida"
            })
        })
    }else{
        let id = req.params.id
        // Update article
        const query = Article.findByIdAndUpdate({_id: id},{image: req.file.filename}, {new: true} )
        query.then((article) => {
            if(article){
                return res.status(200).json({
                    status: "success",
                    article,
                    message: 'La imagen se actualizó'
                })
            }
        })
        .catch((err) => {
            return res.status(400).json({
                status: "error",
                message: `No se pudo subir la imagen..` 
            })
        })
        

    }
    // Si todo va bien, se actualiza el articulo.



}

const image  = (req, res) => {
    let file = req.params.file

    let pathRoot = "./img/articles/" + file
    
    fs.access(pathRoot, (err) => {
        if(!err){
            return res.sendFile(path.resolve(pathRoot))
        }else{
            return res.status(400).json({
                status: "error",
                pathRoot,
                file,
                message: `No existe la imagen.` 
            })
        }
    })

}

const search = (req, res ) => {
    // Sacar el string de busqueda
    let queryString = req.params.query

    // Find OR 
    let query = Article.find({
        "$or":[
            {"title": {"$regex": queryString, "$options": "i"}},
            {"content": {"$regex": queryString, "$options": "i"}}
        ]
    })
    // Orden
    query.sort({
        date: -1
    })

    query.then((article) => {
   
        if(article){
            return res.status(200).json({
                status: "success",
                article,
                message: `No se encontró el articulo.` 
            })
        }
    })
    .catch((err) => {
        return res.status(400).json({
            status: "error",
            queryString,
            message: `No se encontró el articulo.` 
        })
    })
    // Ejecutar consulta

    // Devolver resultado
}

module.exports = {
    createArticle,
    getArticles,
    getArticle,
    deleteArticle,
    editArticle,
    upload,
    image,
    search
}