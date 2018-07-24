// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    var db = client.db('TodoApp');
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    /*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b472f31416a161b613eadee'),
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b4c5adacc37290728c0b794')
    }, {
        $set: {
            name: 'Boris'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //client.close();
});