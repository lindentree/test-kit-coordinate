// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next) {
//     res.send('Server is working properly');
// });

// module.exports = router;

let testSmall = (req, res) => {
  console.log('hitting');
  res.send('fake data')
}
module.exports = {testSmall};
