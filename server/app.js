const express = require('express');
const port = 8080;
const cors = require("cors");
var testServerRouter = require('./routes/testServer')
var bodyParser = require('body-parser');
const db = require('./db/index');
const app = express();
const controllers = require('./controllers');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello world'))

app.use('/testServer/', testServerRouter.testSmall)

app.post('/addFacility/', (req, res) => {
  console.log('hitting');
  console.log('request: ', req);
  console.log('request body: ', req.body);
  controllers.addFacility(req.body, res)
});

app.get('/getFacilities/', (req, res) => {
  controllers.getFacilities(req, res)
});

app.listen(port, () => console.log(`Im listening on ${port}`))

