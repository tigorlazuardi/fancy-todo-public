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
  owner: Schema.Types.ObjectId
}, { timestamps: true })

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo