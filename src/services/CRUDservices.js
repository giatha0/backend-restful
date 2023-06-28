const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.execute(
        'SELECT * FROM Users'
    );

    return results;
}

module.exports = {
    getAllUsers
}