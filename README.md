# Description
A BattleEye Client for node.js. Used for Arma2, DayZ and Arma 3.

# Install
```
npm install battle-eye-client
```
# Example
```js
var BattleEyeClient = require("battle-eye-client")

var battleEyeClient = new BattleEyeClient("IP", 2320, "Password")
battleEyeClient.messageHandler =  function (message) {
  //Process messages
  console.log(message);
};

battleEyeClient.timeoutHandler= function() {
  //Do your cleanup and error handling
  console.log("Connection timed out.");
  battleEyeClient = undefined;
};
battleEyeClient.connect()

battleEyeClient.sendCommand("players")
battleEyeClient.sendCommand("say -1 Hello World")
```

# Dependencies
buffer-crc32

# License
MIT
