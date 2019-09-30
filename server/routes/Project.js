
const Router = require('express').Router(),
    ProjectController = require('../controllers/Project')

Router.post('/', ProjectController.create)
Router.get('/', ProjectController.read)
Router.put('/:id', ProjectController.update)
Router.delete('/:id', ProjectController.delete)

module.exports = Router;
