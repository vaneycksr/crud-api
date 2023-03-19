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

const deleteTask = async (req, res) => {

    const {id} = req.params;

    await taskModel.deleteTask(id);
    return res.status(204).json();
}

const updatedTask = async (req, res) => {

    const {id} = req.params;

    const updatedTask = await taskModel.updateTask(id, req.body);
    return res.status(200).json(req.body);
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updatedTask,
}