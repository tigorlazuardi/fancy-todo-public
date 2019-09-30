
const Todo = require('../models/Todo');

class TodoController {
    static create(req, res, next) {
        const id = req.decode.id
        const { title, description } = req.body
        Todo.create({ title, description, owner: id })
            .then((Todo) => {
                res.status(201).json(Todo)
            })
            .catch(next);
    };

    static read(req, res, next) {
        const id = req.decode.id
        Todo.find({ owner: id })
            .then((Todos) => {
                res.status(200).json(Todos)
            })
            .catch(next);
    };

    static readOne(req, res, next) {
        const id = req.params.id
        Todo.findById(id)
            .then((Todo) => {
                res.status(200).json(Todo)
            }).catch(next);
    }

    static update(req, res, next) {
        const id = req.params.id
        const { title, description, status } = req.body
        Todo.findByIdAndUpdate(id, { $set: { title, description, status } }, { runValidators: true, new: true })
            .then((Todo) => {
                res.status(200).json(Todo)
            }).catch(next);
    }

    static delete(req, res, next) {
        const id = req.params.id
        Todo.findByIdAndDelete(id)
            .then(() => {
                res.status(200).json("Deleted")
            })
            .catch(next);
    };

    static patch(req, res, next) {
        const id = req.params.id
        Todo.findByIdAndUpdate(id, { $set: { status: req.body.status } }, { new: true })
            .then((Todo) => {
                res.status(200).json(Todo)
            }).catch(next);
    }
};

module.exports = TodoController
