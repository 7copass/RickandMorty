const routes = require('express').Router();
const authController = require('./auth.controller');

routes.post('/login', authController.loginController)

module.exports = routes;


