const { Router } = require('express');
const { createArticle, getArticles } = require('../Controllers/articleController.js')
const router = Router();

/* 
Notes: Le agrego un signo "?" al final para indicar que el parametro no es obligatorio.
*/
// Rutas de pruebas

router.post("/create", createArticle)
router.get("/articles/:limit?/:orderby?", getArticles)
module.exports = router;