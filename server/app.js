var express = require('express');

const port = 8080;
var cors = require("cors");

var testServerRouter = require('./routes/testServer')
// var bodyParser = require('body-parser');

var app = express();



app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

  app.get('/', (req, res) => res.send('Hello world'))
  app.use('/testServer/', testServerRouter.testSmall)
  
  app.listen(port, () => console.log(`Im listening on ${port}`))

