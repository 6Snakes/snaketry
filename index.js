// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');


// app.use(bodyParser.json());
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.get('/move', function (req, res) {
//   res.send('MOVE MF');
// });

// app.post('/start', (req, res)=>{
//   console.log('route was hit')
//   res.send('hi')
// });

// app.listen(3005, function () {
//   console.log('Example app listening on port 3005!');
// });
const express = require('express')
const app = express()
const port = 3005
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/move', (req, res) => res.send('this is an awesome move'))

app.post('/start', (req, res) => {
  console.log('route was hit', req.body)
  res.send('hi')

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))