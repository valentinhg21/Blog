const validator = require('validator')
// Article this is object where i have all the functions mongoose
const Article = require("../Models/ArticleModel")


// Create Article
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
    article.save()
    .then((article) => {
        if(article){
            return res.status(200).json({
                status: "sucess",
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
            return res.status(400).json({
                status: "sucess",
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

module.exports = {
    createArticle,
    getArticles
}