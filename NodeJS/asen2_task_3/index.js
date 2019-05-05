const http = require('http');

const server = http.createServer();

server.on('request', (req, resp) => {
   console.log("Event: Request was triggered and this function was called"); 
   resp.end("Hello World");
});

server.on("connection", () => {
    console.log("Connection was triggered");
});

server.on("close", () => {
    console.log("Close event was triggered");
});

server.listen(8080, () => {
  console.log("Event: Listen was triggered");
});

console.log("Server running on port 8080");