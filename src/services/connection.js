const sequelize = require('sequelize');

const connection = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/database.db'
})

module.exports = connection;