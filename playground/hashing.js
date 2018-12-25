const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {ObjectID} = require('mongodb')

var password = '123abc';

// bcrypt.genSalt(10, (err, salt)=>{
//   bcrypt.hash(password, salt, (err,hash) =>{
//     console.log(hash);
//   })
// })
let id = new ObjectID()
let a = jwt.sign({id, access:'auth'}, 'password').toString()
console.log(a)