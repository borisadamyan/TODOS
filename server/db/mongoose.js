/**
 * Created by Boramos on 19-Jul-18.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};