const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('interviewTest', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;