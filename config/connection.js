const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/socialNetworkApi');

module.exports = connection;