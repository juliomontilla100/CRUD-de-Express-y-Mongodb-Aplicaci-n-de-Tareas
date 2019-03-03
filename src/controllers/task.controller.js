const Task = require('../model/task.model') 

let getTasks = () => {
    return Task.find({})
}

let getTaskById = (id) => {
    return Task.findById(id)
}

let newTask = (task, status) => {
    return new Task({
        ...task,
        status: status
    }).save()
}

let updateTask = (id, task) => {
    return Task.findByIdAndUpdate(id, task)
}

let deleteTask = (id) => {
    return Task.findByIdAndDelete(id)
}

module.exports = {
    getTasks,
    newTask,
    getTaskById,
    updateTask,
    deleteTask
}