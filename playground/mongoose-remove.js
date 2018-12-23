const {ObjectID} = require('mongodb');

const {User} = require('./../server/models/users');
const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');

Todo.remove({}).then((result)=>{
    console.log(result)
})