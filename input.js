const { MESSAGES, MOVE } = require("./constants");

let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("you have exited the game");
    process.exit();
  }
  if (MOVE[key]) {
    connection.write(MOVE[key]);
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  //Here we are assigning the function handleUserInput to the callback of stdin "data"
  stdin.on("data", handleUserInput);

  return stdin;
};




module.exports = setupInput;