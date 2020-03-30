const mongoose = require('mongoose');

const users = mongoose.Schema({
  userName: String,
  email: String,
  phone: String,
  address: String
})
const User = mongoose.model('User', users);

var addUser = (obj, callback) => {
  let user = new User(obj);
  user.save((err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

module.exports = addUser