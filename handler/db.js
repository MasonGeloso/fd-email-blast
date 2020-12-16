const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let isConnected;

module.exports = connectToDatabase = () => {
    if (isConnected) {
        return Promise.resolve();
    }

    return mongoose.connect('mongodb://35.153.194.95:27017/fd_email_blase').then(db => {
        isConnected = db.connections[0].readyState;
    })
}