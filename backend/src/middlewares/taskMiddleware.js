const connection = require('../models/connection');

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

    next();
 };

 const validateById = async (req,res,next) => {

    const {id} = req.params;

    const [limit] = await connection.execute('SELECT count(*) as totalTasks FROM tasks ')

    if (id > limit[0].totalTasks) {
        return res.status(404).json({message: 'Task not found'});
    }

    next();
 };

 module.exports = {
    validateFieldBody,
    validateFieldStatus,
    validateById
 }