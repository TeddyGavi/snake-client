const { messages, move } = require("./constants");

let connection;

const handUserInput = (key) => {
  if (key === '\u0003') {
    console.log("you have exited the game");
    process.exit();
  }
  if (move[key]) {
    connection.write(move[key]);
  }
  if (messages[key]){
    connection.write(messages[key]);
    }


/*   if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } */
/*   if (key === 'l') {
    connection.write("Say: LOL");
  }
  if (key === "t") {
    connection.write("Say: Eat my shorts!");
  } */


};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handUserInput);

  return stdin;
};




module.exports = setupInput;