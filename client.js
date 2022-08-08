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

  //display data included the name registration with the same connect handler
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MCD");
  });

  /*   
  testing the .on("", cb) functionality

  conn.on("connect", () => {
    setInterval(() => {
      conn.write("Move: up");
    }, 50)
  }) */

  return conn;
};



module.exports = connect;