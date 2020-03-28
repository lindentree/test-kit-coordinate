const db = require('./db/index');

let addFacility = (req, res) => {
  db.addFacility(req, (err, data) => {
    if (err) {
      res.status(400).end('Sorry')
    } else {
      res.status(200).send('save')
    }
  })
};

let getFacilities = (req, res) => {
  db.getAll((err, data) => {
    if (err) {
      res.status(200).send('Sorry, error on get')
    } else {
      res.status(200).send(data)
    }
  }) 
}

module.exports = {
  addFacility,
  getFacilities
}