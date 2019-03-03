const mongoose = require('mongoose')
const app = require('./src/app')
const config = require('./config')

mongoose.connect(process.env.URL_DB,  {useNewUrlParser: true })
    .then( () => console.log(`Conexion exitosa con Mongo ${process.env.URL_DB}`))
    .catch( err => console.log(`Error de conexión de BD ${err.message}`))

app.listen(
    app.get('port'),
    () => console.log(`Iniciando API en el puerto ${app.get('port')}`)
)

console.log(
    '***** VARIABLES DE ENTORNO *****\n',
    process.env.NODE_ENV,
    '\n',
    process.env.URL_DB,
    '\n',
    process.env.PORT,
    '\n***** VARIABLES DE ENTORNO *****'
)