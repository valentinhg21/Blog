const { Router } = require('express');
const multer = require('multer');
const { 
    createArticle, 
    getArticles, 
    getArticle,
    deleteArticle,
    editArticle, 
    upload 
} = require('../Controllers/articleController.js')
const router = Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './img/articles/');
    },

    filename: (req, file, cb) => {
        cb(null, "article" + Date.now() + file.originalname);
    }
})

const uploads = multer({storage: storage})


/* 
Notes: Le agrego un signo "?" al final para indicar que el parametro no es obligatorio.
*/
// Rutas de pruebas

router.post("/create", createArticle);
router.get("/articles/:limit?/:orderby?", getArticles);
router.get("/article/:id", getArticle);
router.delete("/article/:id", deleteArticle);
router.put("/article/:id", editArticle);
router.post("/upload-image/:id", [uploads.single("file")] ,upload);
module.exports = router;