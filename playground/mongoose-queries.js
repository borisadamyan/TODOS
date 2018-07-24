const {ObjectID} = require('mongodb');
const  {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '5b55b52a0ce9e52c30440983';

if(!ObjectID.isValid(id)){
    console.log('ID not valid')
}*/


/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});
Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not find')
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e));*/


User.findById('5b4f29ccca5f8602f4c0a93c').then((user) => {
    if(!user){
        console.log('User not found');
    }
    console.log('User ', user);
}).catch((e) => console.log(e));