// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    var db = client.db('TodoApp');
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    //deleteMany
    /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });*/

    //deleteOne
    /*db.collection('Todos').deleteOne({text: 'Lunch'}).then(result => {
        console.log(result);
    })*/

    //findOneAndDelete
    /*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Users').deleteMany({name: 'Boris'}).then(res => {
        console.log(res);
    })*/

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b45ec4ae82b86037805486f')}).then(res => {
        console.log(res);
    })

    //client.close();
});