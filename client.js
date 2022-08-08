const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("This is data from the server: ", data);
  });

  //display data
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MCD");
  });

  /*   conn.on("connect", () => {
    setInterval(() => {
      conn.write("Move: up");
    }, 50)
  }) */

  return conn;
};



module.exports = connect;