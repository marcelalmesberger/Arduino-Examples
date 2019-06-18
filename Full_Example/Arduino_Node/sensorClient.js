const io = require("socket.io-client");
const socket = io.connect("http://localhost:4000", {reconnect: true});

socket.on("connect", (socket) => {
    console.log("Connected");
});

socket.on("data", (response) => {
    console.log(response);
})