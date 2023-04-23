const { Router } = require('express');
const { createArticle } = require('../Controllers/articleController.js')
const router = Router();


// Rutas de pruebas

router.post("/create", createArticle)

module.exports = router;