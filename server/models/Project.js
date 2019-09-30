const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  "name": {
    "type": "String",
    required: [true, "Project Name required"]
  },
  "members": {
    "type": [Schema.Types.ObjectId],
    ref: "Users"
  },
  "Todos": {
    "type": [Schema.Types.ObjectId],
    ref: "Todos"
  },
  owner: Schema.Types.ObjectId
}, { timestamps: true })

const Project = mongoose.model('Projects', ProjectSchema)

module.exports = Project