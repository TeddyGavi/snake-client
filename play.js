const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("This is data from the server: ", data)    
  })

  conn.on("connect", () => {
    console.log("Hello are you ready to play Snek?")
  })

  conn.on("timeout", () => {
    console.log("you ded cuz you idled");
  })


  return conn;
};

console.log("Connecting ...");
connect();
