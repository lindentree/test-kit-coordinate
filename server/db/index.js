const mongoose = require('mongoose');
const config = require('../../config')
const connectDb = () => mongoose.connect(config.URI,
  { useNewUrlParser: true,
  useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
})

db.once('open', function() {
  console.log('mongoose connected sucessfully');
})

module.exports = connectDb;