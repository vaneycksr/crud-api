const express = require('express');
const taskController = require('./controllers/taskController');
const taskMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

// criando rota apartir de router
router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateFieldBody ,taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', 
    taskMiddleware.validateFieldBody,
    taskMiddleware.validateFieldStatus,
    taskController.updatedTask
);

module.exports = router;