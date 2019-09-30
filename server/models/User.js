'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const { hash } = require('../helpers/bcryptjs')

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username required'],
        unique: process.env.NODE_ENV === 'test' ? false : true
    },
    email: {
        type: String,
        required: [true, 'Email required.'],
        match: [/^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email format."],
        unique: process.env.NODE_ENV === 'test' ? false : true
    },
    password: {
        type: String,
        required: [true, 'Password required'],
        minlength: [8, 'Password minimum length is 8 characters']
    }
}, { timestamps: true })

UserSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" })

UserSchema.pre('save', function (next) {
    this.password = hash(this.password)
    next()
})

const User = mongoose.model('Users', UserSchema)

module.exports = User