// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*var user = {name: 'Boris', age: 36};
var {name} = user;*/

/*var obj = new ObjectID();
console.log(obj);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    var db = client.db('TodoApp');
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    /*db.collection('Todos').insertOne({
        text: 'Some text',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to Insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

    /*db.collection('Users').insertOne({
        name: 'Boris',
        age: 30,
        location: 'Armenia Yerevan'
    }, (err, result) => {
       if(err) throw err;
       //console.log(JSON.stringify(result.ops, undefined, 2));
       console.log(result.ops[0]._id.getTimestamp());
    });*/

    /*db.collection('Users').insertOne({
       name: 'Staff',
        age: 30,
        location: 'Yerevan'
    }, (err, result) => {
        if(err) throw err;
        console.log(JSON.stringify(result, undefined, 2))
    });*/

    client.close();
});