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
    const [tasks] = await connection.execute('SELECT * FROM tasks')

    return tasks;
};

const createTask = async (task) => {

    const {title} = task;

    // salvar data no banco
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';

    const [createdTask] = await connection.execute(query, [title, 'pending', dateUTC]);

    return {insertedId: createdTask.insertId};
};

const deleteTask = async (id) => {

    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?',[id]);

    return removedTask;
}

const updateTask = async (id, task) => {

    const {title, status} = task;

    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

    const [updatedTask] = await connection.execute(query, [title, status, id]);

    return updatedTask;
}


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};