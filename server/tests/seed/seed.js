const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const jwt = require('jsonwebtoken');
const  {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTowId = new ObjectID();
const user = [
    {
        _id: new ObjectID(),
        email: 'boris@exe.com',
        password: '123abc',
        tokens: [{
            access: 'auth',
            token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
        }]
    },
    {
        _id: new ObjectID(),
        email: 'jan@exe.com',
        password: '456abc'
    },
];

const todos =[
    {
        _id: new ObjectID(),
        text: 'First test'
    },
    {
        _id: new ObjectID(),
        text: 'Second test',
        completed: true,
        completedAt: 333
    }
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(user[0].save());
        var userTow = new User(user[1].save());
        return Promise.all([userOne, userTow])

    }).then(() => done());
};

module.exports = { todos, populateTodos, populateUsers};