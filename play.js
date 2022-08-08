const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
//only need to invoke the connect function once otherwise the client sees the output twice
// call the connect function
// connect();

//call the set up input function
setupInput(connect());


