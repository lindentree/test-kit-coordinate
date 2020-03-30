const mongoose = require('mongoose');

const providers = mongoose.Schema({
  providerId: Number, //user input
  providerName: String,
  address: String,
  email: String,
  phoneNumber: String,
  operatingHours: Array,
  geolocation: Array,
  testsAvailable: Number,
  currentStatus: String,
  testCapacity: String, //red green, yellow
  testCriteria: String, //severity
  miscellaneousMaterials: Array
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