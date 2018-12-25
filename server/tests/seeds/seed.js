const {ObjectID} = require('mongodb')
const jwt = require('jsonwebtoken')

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user')

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
  }, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
  }];

  const populateTodo = (done) => {
    Todo.remove({}).then(() => {
      return Todo.insertMany(todos);
    }).then(() => done());
  }

  const user1ID = new ObjectID();
  const user2ID = new ObjectID();
  const users = [{
    _id: user1ID,
    email: 'vadim@gmail.com',
    password:'123abc',
    tokens:[{
        access:'auth',
        token: jwt.sign({_id: user1ID, access:'auth'}, 'abc123').toString()
    }]
  },{
    _id:user2ID,
    email:'vadim2@gmail.com',
    password:'123abc'
  }]

  const populateUsers = (done)=>{
      User.remove({}).then(()=>{
        var user1 = new User(users[0]).save();
        var user2 = new User(users[1]).save();

        return Promise.all([user1,user2]);
      }).then(()=>done())
  }

  module.exports = {todos, populateTodo,users, populateUsers}