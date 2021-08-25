const sequelize = require('sequelize');
const connection = require('./connection');

const Client = connection.define('clients', {
    Name: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Phone: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Group: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    }
});

Client.sync({force: false})

const Group = connection.define('groups', {
    Name: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    }
})

Group.sync({force: false})

const Messages = connection.define('messages', {
    GroupName: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    MessageText: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    }
})

Messages.sync({force: false})

module.exports = { Client, Group, Messages }