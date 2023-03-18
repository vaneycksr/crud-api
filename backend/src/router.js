const express = require('express');

const router = express.Router();

// criando rota apartir de router
router.get('/',(request,response)=> response.status(200).send('teste pelo arquivo de rotas'));

module.exports = router;