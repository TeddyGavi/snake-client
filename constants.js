const IP = '10.0.2.15';
const PORT = 50541;

//I am not using the unicode characters here as these test fine, I will research this more to see if this ok or the unicode is the standard way to record key presses
const MOVE = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
};

const MESSAGES = {
  l: "Say: LOL",
  t: "Say: Eat My shorts",
};

/*
replaced these with an object for simplifying input code
const MOVE_UP_KEY = 'w';
const MOVE_DOWN_KEY = 's';
const MOVE_LEFT_KEY = 'a';
const MOVE_RIGHT_KEY = 'd';
*/

module.exports = {
  IP,
  PORT,
  MESSAGES,
  MOVE,
};