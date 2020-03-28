const mongoose = require('mongoose');

const URI = 'mongodb+srv://hien:testkits@covid-test-kits-h2gnb.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(URI,
  { useNewUrlParser: true,
  useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
})

db.once('open', function() {
  console.log('mongoose connected sucessfully');
})
