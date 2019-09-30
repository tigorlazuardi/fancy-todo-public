
const Router = require('express').Router(),
    TodoController = require('../controllers/Todo')

Router.post('/', TodoController.create)
Router.get('/', TodoController.read)
Router.put('/:id', TodoController.update)
Router.delete('/:id', TodoController.delete)

module.exports = Router;
