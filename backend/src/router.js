const express = require('express');

const router = express.Router();

// criando rota apartir de router
router.get('/',(req,res)=> res.status(200).send('teste pelo arquivo de rotas'));

module.exports = router;