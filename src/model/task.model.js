const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Task = new Schema({
    title: String,
    description: String,
    status: Boolean
})

module.exports = mongoose.model('task', Task)