const Router = require('express').Router(),
    ProjectController = require('../controllers/Project'),
    authentication = require('../middleware/authentication'),
    authorizationProject = require('../middleware/authorizationProject'),
    authrizationMember = require('../middleware/authorizationMember')

Router.use(authentication)
Router.post('/', ProjectController.create)


Router.get('/', ProjectController.read)
Router.put('/:id', ProjectController.update)
Router.delete('/:id', ProjectController.delete)

module.exports = Router;
