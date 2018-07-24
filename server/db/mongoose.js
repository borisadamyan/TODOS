/**
 * Created by Boramos on 19-Jul-18.
 */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};
