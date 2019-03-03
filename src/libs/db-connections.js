const mongoose = require('mongoose')

let db

module.exports = () => {
    if(!db){
        db = mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true })
    }

    return db
}