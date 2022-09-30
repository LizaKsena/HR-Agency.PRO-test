var path = require('path')
var express = require('express')
var api = require('./api')
const cors = require('cors');
var bodyParser = require('body-parser')
var port = 3030

var app = express()

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(bodyParser.json())
app.use('/api', api)

app.listen(port, () => { console.log(`Server running on port ${port}`); });


// app.listen(port, 'localhost', function (err) {
//   if (err) {
//     console.log(err)
//     return
//   }
// })