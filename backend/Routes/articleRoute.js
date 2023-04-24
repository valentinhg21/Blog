const { Router } = require('express');
const { createArticle, getArticles, getArticle,deleteArticle } = require('../Controllers/articleController.js')
const router = Router();

/* 
Notes: Le agrego un signo "?" al final para indicar que el parametro no es obligatorio.
*/
// Rutas de pruebas

router.post("/create", createArticle)
router.get("/articles/:limit?/:orderby?", getArticles)
router.get("/article/:id", getArticle)
router.delete("/article/:id", deleteArticle)
module.exports = router;