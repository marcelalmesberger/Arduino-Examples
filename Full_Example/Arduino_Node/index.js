const serialport = require('serialport');
const Readline = require("@serialport/parser-readline");
const fs = require("fs");
const http = require("http");
const server = http.createServer();
const io = require("socket.io")(server);


let connectedSocket = null;

io.on("connection", (socket) => {
    connectedSocket = socket;
    console.log("a user connected");
});

server.listen(4000, () => {
    console.log("listening on port 3000")
});

const fileName = __dirname + "/file.csv";

const dataArray = [];

/*fs.writeFileSync(fileName, "timestamp; data\n", "utf8", (err) => {
    if (err) {
        console.log(err);
    }
});*/

const manufacturerName = 'Arduino LLC (www.arduino.cc)';

serialport.list((err, result) => {
    const device = result.find((device) => device.manufacturer === manufacturerName);

    if (device) {
        console.log('Found Arduino', device);
        const arduinoPort = new serialport(device.comName, { baudRate: 115200 });

        arduinoPort.on("open", () => {
            console.log("Port to Arduino opened");
        });
    
        arduinoPort.on("close", () => {
            console.log("Port to Arduino closed");
        });

        arduinoPort.on("error", (error) => {
            console.log("Error from Arduino: ", error);
        });

        const parser = arduinoPort.pipe(new Readline({ delimiter: "\n"}));

        parser.on("data", data => {
            try {
                const parsedValue = JSON.parse(data);
                dataArray.push(parsedValue);

                if (connectedSocket) {
                    connectedSocket.emit("data", parsedValue);
                }
                /*fs.appendFile(fileName, parsedValue.timestamp + ";" + parsedValue.value + "\n", "utf8", (error) => {
                    if (err) {
                        console.log(err);
                    }
                });
                if (dataArray.length === 50) {
                    process.exit();
                }*/
            } catch (error) {
                console.log("Could not read Line skip it...");
            }
        });
    }
    else {
        console.log('No Arduino found!');
    }
});