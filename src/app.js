const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true })
mongoose.connection.on('error', () => {
    console.log('la conexión falló')
    process.exit(1)
})

const app = express()

const indexRoute = require('./routes')


/* settings */
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* midlewares */
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))

/* routes */
app.use('/', indexRoute)

/* run server */
app.listen(app.get('port'), () => {
    console.log(`app corriendo en el puerto ${app.get('port')}`)
})