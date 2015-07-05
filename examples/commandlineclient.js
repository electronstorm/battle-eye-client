var BattleEyeClient = require("..")

var battleEyeClient = new BattleEyeClient("IP", 2320, "Password", function (message) {
  console.log(message)
})
battleEyeClient.connect()

var sys = require("sys");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    battleEyeClient.sendCommand(d.toString().substring(0, d.length-1))
  });
