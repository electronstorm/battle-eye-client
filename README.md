# Description
A BattleEye Client for node.js. Used for Arma2, DayZ and Arma 3.

# Install
```
npm install battle-eye-client
```
# Example
```js
var BattleEyeClient = require("..")

var battleEyeClient = new BattleEyeClient("IP", 2320, "Password", function (message) {
  console.log(message)
})
battleEyeClient.connect()

battleEyeClient.sendCommand("players")
battleEyeClient.sendCommand("say -1 Hello")
```

# Dependencies
buffer-crc32

# License
MIT
