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

var availability = mongoose.Schema({
  id: Number,
  testAmounts: Number,
  facilityName: String,
  address: String,
  phoneNumber: String
});

var Availability = mongoose.model('Availability', availability);

var getAll = function(callback) {
  Availability.find({}, function(err, facilities) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, facilities);
    }
  });
};

var addFacility = (obj, callback) => {
  let facility = new Availability(obj);
  facility.save((err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

module.exports = {db, 
  addFacility, 
  getAll}