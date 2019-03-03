const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

const indexRoute = require('./routes')


/* settings */
app.set('port', process.env.PORT || 3000)
app.set()

/* midlewares */
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))

/* routes */
app.use('/', indexRoute)

/* run server */
app.listen(app.get('port'), () => {
    console.log(`app corriendo en el puerto ${app.get('port')}`)
})