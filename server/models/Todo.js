const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  "title": {
    type: "String",
    required: [true, "Title Required"]
  },
  "description": {
    "type": "String",
    default: null
  },
  "status": {
    "type": "Boolean",
    default: false
  },
  owner: Schema.Types.ObjectId,
  inProject: { type: Schema.Types.ObjectId, default: null }
}, { timestamps: true })

const Todo = mongoose.model('Todos', TodoSchema)

module.exports = Todo