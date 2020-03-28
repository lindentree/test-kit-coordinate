const mongoose = require('mongoose');

const users = mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  phone_number: String,
  address: String
})
const User = mongoose.model('User', users)

// var getAll = function(callback) {
//   User.find({}, function(err, users) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, users);
//     }
//   });
// };

// var addUser = (obj, callback) => {
//   let user = new Provider(obj);
//   User.save((err, data) => {
//     if (err) {
//       callback(err, null)
//     } else {
//       callback(null, data)
//     }
//   })
// }