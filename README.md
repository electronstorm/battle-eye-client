# Description
A BattleEye Client for node.js. Used for Arma2 and Arma 3.

# Installation
```
npm install battle-eye-client
```
# Example Usage
```js
// Load library
var BattleEyeClient = require("battle-eye-client")

// Create Client. Modify ip-address, port and password
var battleEyeClient = new BattleEyeClient("IP", 2320, "Password")

// Register callback function for replies. Any message from the server will go here. 
battleEyeClient.messageHandler =  function (message) {
  console.log(message);
};

// Do your cleanup and error handling
battleEyeClient.timeoutHandler= function() {
  console.log("Connection timed out.");
  battleEyeClient = undefined;
};

// Connect
battleEyeClient.connect()

// Send commands
battleEyeClient.sendCommand("players")
battleEyeClient.sendCommand("say -1 Hello World")
```

# Dependencies
buffer-crc32

# License
MIT
