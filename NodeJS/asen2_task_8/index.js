//load the express module
const express = require('express');
// function express is called to initialize express object
const app = express();

//__dir is a predefined var of node js and returns the path
console.log(__dirname);

//tell express to make the public folder available
app.use(express.static('public'));

app.get('/', (req, res) => {
  //we have to provide the full path of the index.html file
  res.sendFile(__dirname +'/public/app.html');
});

app.get('/myroute', (req, res) => {
  //additional route /myroute
  res.send("Hello from other route!");
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});