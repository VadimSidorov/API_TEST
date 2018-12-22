const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Something go wrong')
    }console.log('db server connected')

    
    const db = client.db('TodoApp');

    // db.collection('Users').deleteMany({name:'Huskar'}).then((result)=>{
    //     console.log(result)
    // })
    
    // db.collection('Users').findOneAndDelete(ObjectID("5c021c346100de3197912d2d")).then((result)=>{
    //     console.log(result)
    // })
    // db.collection('Users').insertOne({name:'Huskar'}).then((result)=>{
    //     console.log(result)
    // })
    var a = ObjectID("5c021dc0e69eec31b0b9ed7d");
    console.log(typeof(a))
    
 })
