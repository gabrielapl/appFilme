const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Filmes = require('../models/Filmes')

const connection = new Sequelize(dbConfig)


Filmes.init(connection)

module.exports = connection;