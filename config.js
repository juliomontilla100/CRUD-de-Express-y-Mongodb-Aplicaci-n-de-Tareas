process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if(process.env.NODE_ENV === 'dev'){
    process.env.URL_DB = 'mongodb://localhost:27017/crud'
}else {
    process.env.URL_DB = 'mongodb://juliomontilla100:04186131441@crud-node-mongo-ejs-shard-00-00-zgddq.mongodb.net:27017,crud-node-mongo-ejs-shard-00-01-zgddq.mongodb.net:27017,crud-node-mongo-ejs-shard-00-02-zgddq.mongodb.net:27017/test?ssl=true&replicaSet=crud-node-mongo-ejs-shard-0&authSource=admin&retryWrites=true'
}
