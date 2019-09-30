const Router = require('express').Router()
const users = require('../controllers/User')
const Project = require('./Project')
const Todo = require('./Todo')


// * Server Test
Router.get('/', (req, res) => {
    res.status(200).json({ message: "connected to server" })
})

// * Routes

Router.use('/users', users)
Router.use('/todos', Todo)
Router.use('/projects', Project)

module.exports = Router;