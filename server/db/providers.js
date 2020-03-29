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

var getAll = (callback) => {
  Provider.find({}, (err, providers) => {
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

var getOne = (id, callback) => {
  Provider.findOne({'id': id}, (err, provider) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, provider)
    }
  })
};

module.exports = {
  getAll,
  addProvider,
  getOne
};