const mongoose = require('mongoose');

var providers = mongoose.Schema({
  id: Number, //user input
  provider_name: String,
  address: String,
  email: String,
  phone_number: String,
  operating_hours: Array,
  geolocation: Array,
  tests_available: Number,
  testing_capacity: Array, //red green, yellow
  testing_criteria: Array, //severity
  miscellaneous_materials: Array
});

var Provider = mongoose.model('Provider', providers);

var getAll = function(callback) {
  Provider.find({}, function(err, proviers) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, providers);
    }
  });
};

var addProvider = (obj, callback) => {
  let provider = new Provider(obj);
  provider.save((err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

module.exports = {
  getAll,
  addProvider
};