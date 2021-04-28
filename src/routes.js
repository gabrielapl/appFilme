const express = require('express');
const FilmesController = require('./controller/FilmesController')


const routes = express.Router();


routes.get('/filmes', FilmesController.index)
routes.post('/filmes', FilmesController.store);


module.exports = routes;