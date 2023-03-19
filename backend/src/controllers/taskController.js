/**
 * CAMADA QUE MONTA A REQUEST DE ACORDO COM AS INFORMACOES VEM DO MODEL
 */
const taskModel = require('../models/taskModel');

// o _ no req é pra expressar que nao estou utilizando
const getAll = async (_req, res) => {

    const tasks = await taskModel.getAll();
    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {

    const createdTask = await taskModel.createTask(req.body);
    return res.status(201).json(createdTask);

};

module.exports = {
    getAll,
    createTask,
}