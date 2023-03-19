/**
 * necessario para validar dados
 */
 const validateBody = (req,res,next) => {

    const {body} = req;

    if (body.title === undefined) {
        return res.status(400).json({message: 'The field "title" is required'});
    }
    if (body.title === '') {
        return res.status(400).json({message: 'title cannot be empty!'});
    }

    // se nao entrou nos ifs eh porque esta ok, por isso o next, vai para o proximo middlware, ou proxima rota
    next();

 };

 module.exports = {
    validateBody,
 }