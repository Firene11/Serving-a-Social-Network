//create a connection and require mongoose

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mysocial_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose.connection;
