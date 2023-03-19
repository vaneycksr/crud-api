const express = require('express');
const taskController = require('./controllers/taskController');
const taskMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

// criando rota apartir de router
// rotas get
router.get('/tasks', taskController.getAll);
router.get('/tasks/:id', taskMiddleware.validateById, taskController.getById);

// rotas post
router.post('/tasks', taskMiddleware.validateFieldBody ,taskController.createTask);

// rotas delete
router.delete('/tasks/:id', taskController.deleteTask);

// rotas put
router.put('/tasks/:id', 
    taskMiddleware.validateFieldBody,
    taskMiddleware.validateFieldStatus,
    taskController.updatedTask
);

module.exports = router;