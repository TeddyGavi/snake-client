const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
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