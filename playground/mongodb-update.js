const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Something go wrong')
    }console.log('db server connected')
    
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c021dc0e69eec31b0b9ed7d')
    },
    {$inc:{
        lvl:1
    }
    },
    {returnOriginal:false
    }).then((result)=>{
        console.log(result)
    })
    client.close()

 })
