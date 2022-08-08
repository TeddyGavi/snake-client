const handUserInput = (key) => {
  if (key === '\u0003') {
    console.log("you have exited the game")
    process.exit();
  }
}

const setupInput = function () {
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();

stdin.on("data", handUserInput)

return stdin;
};




module.exports = setupInput