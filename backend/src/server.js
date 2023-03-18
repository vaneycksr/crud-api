const app = require('./app');

// faz com que seja possivel acessar as info do .env em todos os outros arquivos
require('dotenv').config(); 

const PORT = process.env.PORT || 3333;

// servidor recebe requisicoes nessa porta
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));