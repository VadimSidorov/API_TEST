var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID}=require('mongodb');

const mongoose = require('./db/mongoose');
const {Todo} = require('./models/todos');

var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.get('/todos/:id',(req,res)=>{
  var id = req.params.id
  if(!ObjectID.isValid(id)){
    return res.status(404).send('ObjectID is not Valid')
  } 
  
  Todo.findById(id).then((todos)=>{
    if(todos){
      res.send(todos)
    }else{
      res.status(404).send('Id not Found')
    }
  },(e)=>{
    res.status(400).send()
  })
  
})

app.post('/todos',(req,res)=>{
  var todo = new Todo ({
    text:req.body.text
  })
  todo.save(todo).then((doc)=>{
    res.status(200).send(req.body)
  })
})




app.listen(3000, ()=>{
  console.log(`started on ${port}`)
})

module.exports = {app};