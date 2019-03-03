const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task.controller')

router.get('/', async (req,res) => {

    let tasks = await taskController.getTasks()
    
    res.render('index', {
        title: "CRUD ToDo List",
        tasks : tasks
    })

})

router.post('/add', async (req, res) =>{

    await taskController.newTask(req.body, false)
    res.redirect('/')

})

router.get('/turn/:id', async (req, res) =>{

    let task = await taskController.getTaskById(req.params.id)

    task.status = !task.status

    let updateTask = await taskController.updateTask(req.params.id, task)

    res.redirect('/')

    
})

router.get('/delete/:id', async (req, res) => {

    let deleteTask = await taskController.deleteTask(req.params.id)
    
    res.redirect('/')

    
    
})

module.exports = router