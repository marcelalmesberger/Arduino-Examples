const http = require("http");

const server = http.createServer((request, response) => {
    console.log("Server was called", request);
    response.end("Hello World!");
});

server.listen(8080);