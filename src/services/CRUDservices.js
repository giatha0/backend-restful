const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.execute(
        'SELECT * FROM Users'
    );

    return results;
}

const getUserById = async (id) => {
    let [results, fields] = await connection.execute(
        'SELECT * FROM Users WHERE id = ?',
        [id]
    );

    return results;
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.execute(
        'DELETE FROM Users WHERE id = ?',
        [id]
    );

    return results;
}


module.exports = {
    getAllUsers, getUserById, deleteUserById
}