const mongoose = require('mongoose');

const providers = mongoose.Schema({
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

const Provider = mongoose.model('Provider', providers);

const getAll = (callback) => {
  Provider.find({}, (err, providers) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, providers);
    }
  });
};

const getOne = (id, callback) => {
  Provider.findOne({'id': id}, (err, provider) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, provider)
    }
  })
};

const addProvider = (obj, callback) => {
  let provider = new Provider(obj);
  provider.save((err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

const updateProvider = (id, obj, callback) => {
  for (var key in obj) {
    Provider.findOneAndUpdate({id:id}, {$set: {key: obj[key]}}, (err, data) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, data)
      }
    })
  }
}

module.exports = {
  getAll,
  addProvider,
  getOne,
  updateProvider
};