//when use socket.io and express together we have to configure express with the http core modul
const express = require('express');
// create an instance of express
const app = express();

//tell the server to use the express object as request handler
const server = require('http').createServer(app);

//create instance of socket.io and pass server object
const io = require('socket.io')(server);

//tell express to make the public folder available
app.use(express.static('public'));

app.get('/', (req, res) => {
  //we have to provide the full path of the index.html file
  res.sendFile(__dirname + '/public/app.html');
});

server.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});

//we observe when a new connection is establisehd from a client
io.on('connection', (socket) => {
  //in the callback we get the socket instance of the connection
  console.log("Client connected to our Node App");

  //by calling emit on the socket we can send a message to the client
  socket.emit('hello', 'Hello Client');

  //we can register a new listener and call a function when an incoming message is received
  socket.on('info', (data) => {
    console.log('message from client: ' + data);
  });
  setInterval(() => {
    socket.emit('data', Math.random());
  }, 1000);
});