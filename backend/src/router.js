const express = require('express');
const taskController = require('./controllers/taskController');

const router = express.Router();

// criando rota apartir de router
router.get('/tasks', taskController.getAll)

module.exports = router;