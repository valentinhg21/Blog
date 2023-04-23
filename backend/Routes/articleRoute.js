const { Router } = require('express');
const { createArticle, getArticles } = require('../Controllers/articleController.js')
const router = Router();


// Rutas de pruebas

router.post("/create", createArticle)
router.get("/articles", getArticles)
module.exports = router;