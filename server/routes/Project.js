const Router = require('express').Router(),
    ProjectController = require('../controllers/Project'),
    authentication = require('../middleware/authentication'),
    authorizationProject = require('../middleware/authorizationProject'),
    authorizationMember = require('../middleware/authorizationMember')

Router.use(authentication)
Router.post('/', ProjectController.create)
Router.get('/', ProjectController.read)

// ! Members Exclusive

Router.use('/:id', authorizationMember)

// * Project Owner Only

Router.use('/:id/*', authorizationProject)
Router.put('/:id/update', ProjectController.update)
Router.delete('/:id/delete', ProjectController.delete)

// * All members

Router.get('/:id', ProjectController.readOne)
Router.post('/:id', ProjectController.addTodo)
Router.delete('/:id', ProjectController.removeTodo)



module.exports = Router;
