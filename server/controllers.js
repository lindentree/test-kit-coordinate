const providers = require('./db/providers');
const add = require('./db/users');

let addProvider = (req, res) => {
  providers.addProvider(req, (err, data) => {
    if (err) {
      res.status(400).end('Sorry')
    } else {
      res.status(200).send('save')
    }
  })
};

let getProviders = (req, res) => {
  providers.getAll((err, data) => {
    if (err) {
      res.status(400).send('Sorry, error on get')
    } else {
      res.status(200).send(data)
    }
  }) 
}

let getProvider = (req, res) => {
  providers.getOne(req, (err, data) => {
    if (err) {
      res.status(400).send('cant get one')
    } else {
      res.status(200).send(data)
    }
  })
}

let updateProvider = (req, res) => {
  providers.updateProvider(req.id, req.update, (err, data) => {
    if (err) {
      res.status(400).send('cant get one')
    } else {
      res.status(200).send(data)
    }
  })
}

let addUser = (req, res) => {
  add(req.body, (err, data) => {
    if (err) {
      res.status(400).end('Sorry')
    } else {
      res.status(200).send('save')
    }
  })
}

module.exports = {
  addProvider,
  getProviders,
  getProvider,
  updateProvider,
  addUser
}