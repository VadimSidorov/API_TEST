// const MongoClient = require('mongodb').MongoClient; 
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if (err){
        return console.log('Unable to connect to db server')
    }
    console.log('Connected to mogodb server');
    const db = client.db('TodoApp')

    // db.collection('Users').insertOne({
    //     name:'Vadim',
    //     age:25,
    //     location:'Florida'
    // },(err,result)=>{
    //     if (err){
    //         return console.log('Unable to insert Todo', err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp())

    // })
    // client.close();
    db.collection('Users').find({name:'Vadim'}).toArray().then((docs)=>{
        console.log(docs)
    })
});