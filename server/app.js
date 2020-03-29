const express = require('express');
const port = 8080;
const cors = require("cors");
var testServerRouter = require('./routes/testServer')
var bodyParser = require('body-parser');
const app = express();
const controllers = require('./controllers');
const connectDb = require('./db/index') 

connectDb()
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello world'))

app.use('/testServer/', testServerRouter.testSmall)

app.post('/addProvider/', (req, res) => {
  controllers.addProvider(req.body, res)
});

app.get('/getProviders/', (req, res) => {
  controllers.getProviders(req, res)
});

app.get('/getProvider/', (req, res) => {
  controllers.getProvider(req, res)
});

app.post('/updateProvider/', (req, res) => {
  controllers.updateProvider(req, res)
})

app.listen(port, () => console.log(`Im listening on ${port}`))

