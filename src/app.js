const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

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

module.exports = app