
const Router = require('express').Router(),
    TodoController = require('../controllers/Todo'),
    authentication = require('../middleware/authentication'),
    authorizationTodo = require('../middleware/authorizationTodo')

Router.use(authentication)

Router.post('/', TodoController.create)
Router.get('/', TodoController.read)

Router.use('/:id', authorizationTodo)

Router.get('/:id', TodoController.readOne)
Router.put('/:id', TodoController.update)
Router.delete('/:id', TodoController.delete)
Router.patch('/:id', TodoController.patch)

module.exports = Router;
