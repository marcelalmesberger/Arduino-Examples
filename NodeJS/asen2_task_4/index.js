const fs = require("fs");
console.log("Programm started");

//SYNC
/*const contents = fs.readFileSync("text.txt", "utf8");
console.log("Read file finished, Content is ", contents); */

//ASYNC
fs.readFile("text.txt", "utf8", (error, data) => {
    if (error) {
        throw error;
    }
    console.log("Read file, finished");
});

console.log("I am after the readFile Method");
