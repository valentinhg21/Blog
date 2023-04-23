const { Router } = require('express');
const { test } = require('../Controllers/articleController.js')
const router = Router();


// Rutas de pruebas
router.get("/test", test)


module.exports = router;