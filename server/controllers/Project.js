const Project = require('../models/Project'),
    Todo = require('../models/Todo'),
    mongoose = require('mongoose')

class ProjectController {
    static create(req, res, next) {
        const id = req.decode.id
        const { name } = req.body
        Project.create({ name, owner: id })
            .then((Project) => {
                res.status(201).json(Project)
            })
            .catch(next);
    };

    static read(req, res, next) {
        const id = req.decode.id
        Project.find({ members: mongoose.Types.ObjectId(id) })
            .then((Projects) => {
                res.status(200).json(Projects)
            }).catch(next);
    }

    static readOne(req, res, next) {
        const projectId = req.params.projectId
        Project.findById(projectId)
            .populate('Todos')
            .populate('members', '-password')
            .then((Project) => {
                res.status(200).json(Project)
            })
            .catch(next);
    };

    static update(req, res, next) {
        const projectId = req.params.projectId
        const { name } = req.body
        Project.findByIdAndUpdate(projectId, { $set: { name } }, { runValidators: true, new: true })
            .then((Project) => {
                res.status(200).json(Project)
            }).catch(next);
    }

    static delete(req, res, next) {
        const projectId = req.params.projectId
        Project.findByIdAndDelete(projectId)
            .then(() => {
                res.status(200).json("Project Deleted")
            })
            .catch(next);
    };

    static addTodo(req, res, next) {
        const projectId = req.params.projectId
        const userId = req.decode.id
        const { title, description } = req.body
        Todo.create({ title, description, owner: userId, inProject: projectId })
            .then((Todo) => {
                return Project.findByIdAndUpdate(projectId, { $push: { Todos: Todo.id } }, { new: true })
                    .populate('Todos')
                    .populate('members', '-password')
            })
            .then((Project) => res.status(201).json(Project))
            .catch(next);
    }

    static removeTodo(req, res, next) {
        const { projectId, todoId } = req.params
        let data
        Project.findByIdAndUpdate(projectId, { $pull: { Todos: todoId } }, { new: true })
            .populate('Todos')
            .populate('members', '-password')
            .then((Project) => {
                data = Project
                return Todo.findByIdAndDelete(todoId)
            })
            .then(() => res.status(200).json(data))
            .catch(next)
    }
};

module.exports = ProjectController
