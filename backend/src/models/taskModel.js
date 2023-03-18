const connection = require('./connection');

/**
 * CAMADA DO BANCO, MAIS BAIXO NIVEL
 */

/**
 * Nesse arquivo será criado funções que vão interagir com o banco
 * de dados. Cada entidade eh um model     
 */


// lista todas as tasks, tem que acessar o banco de dados e trazer
// as informacoes
const getAll = async () => {

    // busca no banco todas as tasks
    const tasks = await connection.execute('SELECT * FROM tasks')

    return tasks;
}

module.exports = {
    getAll
};