const express = require('express')
const path = require("path");
const app = express();
const reactDirectory = './introofproject/build'

let count = 0;

app.use(express.static(path.join(__dirname, reactDirectory)));

app.get('/', function (req, res) {
  console.log('get request');
  res.sendFile(path.join(__dirname, reactDirectory+'/index.html'));
  count++;
  console.log(count);
});

app.listen(2080, function() {
    console.log('listening on 2080')
})