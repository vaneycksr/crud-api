const express = require('express');
const taskController = require('./controllers/taskController');
const taskMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

// criando rota apartir de router
router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateBody ,taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;