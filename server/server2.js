const mongoose = require('./db/mongoose');
const {Todo} = require('./models/todos');

var id = "5c0360fd05d9de35252cc9c2";

Todo.find({
    _id: id
}).then((todos)=>{
    console.log(todos)
})