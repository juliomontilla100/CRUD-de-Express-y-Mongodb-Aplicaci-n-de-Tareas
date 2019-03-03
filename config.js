process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if(process.env.NODE_ENV === 'dev'){
    process.env.URL_DB = 'mongodb://localhost:27017/crud'
}else {
    process.env.URL_DB = 'mongodb://juliomontilla100:04186131441@crud-node-mongo-ejs-zgddq.mongodb.net/test?retryWrites=true'
}
