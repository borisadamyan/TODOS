// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    var db = client.db('TodoApp');
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    /*db.collection('Todos').find({
        _id: new ObjectID('5b47102c416a161b613ea740')
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, err => {
        console.log(err)
    });*/
    /*db.collection('Todos').find().count().then((count) => {
        console.log('Count: ' + count)
    }, err => {
        console.log(err)
    });*/
    db.collection('Users').find({name: 'Boris'}).toArray().then((user) => {
        console.log(JSON.stringify(user, undefined, 2))
    }, err => {
        console.log(err);
    });
    //client.close();
});