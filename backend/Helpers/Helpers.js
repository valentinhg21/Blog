const validator = require('validator');
const articleValidate = (res, params, messageValidator, messageError) => {
  
    let { title, content} = params

    try{
        // VALIDATE DATA
        let title_validator = !validator.isEmpty(title) && validator.isLength(title, {min: 5, max: undefined});
        let content_validator = !validator.isEmpty(content)
        if(!title_validator || !content_validator){
            throw new Error(`${messageValidator}`)
        }
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: `${messageError}` 
        })
    }
}

module.exports = {
    articleValidate,

}