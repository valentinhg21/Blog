const validator = require('validator')
const Article = require("../Models/ArticleModel")
const createArticle =  (req, res) => {
    // GET PARAMS POST
    const {title, content } = req.body
    try{
        // VALIDATE DATA
        let title_validator = !validator.isEmpty(title) && validator.isLength(title, {min: 5, max: undefined});
        let content_validator = !validator.isEmpty(content)

        if(!title_validator || !content_validator){
            throw new Error("No se ha validado la información!")
        }
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: `Faltan datos para enviar.` 
        })
    }

    // Create object
    const article = new Article(req.body)


    // Save article in DB
    if(article.save()){
        return res.status(200).json({
            status: "sucess",
            message: `Se guardo correctamente.`,
            article: article
        })
    }else{
        return res.status(400).json({
            status: "error",
            message: `No se pudo guardar el articulo en la db` 
        })
    }
  




}

module.exports = {
    createArticle
}