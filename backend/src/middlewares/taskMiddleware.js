/**
 * necessario para validar dados
 */
 const validateFieldBody = (req,res,next) => {

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

 const validateFieldStatus = (req,res,next) => {

    const {body} = req;

    if (body.status === undefined) {
        return res.status(400).json({message: 'The field "status" is required'});
    }
    if (body.status === '') {
        return res.status(400).json({message: 'status cannot be empty!'});
    }

    // se nao entrou nos ifs eh porque esta ok, por isso o next, vai para o proximo middlware, ou proxima rota
    next();

 };

 module.exports = {
    validateFieldBody,
    validateFieldStatus
 }