var BattleEyeClient = require("..")

var battleEyeClient = new BattleEyeClient("127.0.0.1", 2320, "Password")

//Show messages
battleEyeClient.messageHandler =  function (message) {
  console.log(message);
};

//Handle Timeout
battleEyeClient.timeoutHandler= function() {
  console.log("Connection timed out.");
  battleEyeClient = undefined;
  process.exit();
};

//Connect
battleEyeClient.connect()

var sys = require("sys");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
  battleEyeClient.sendCommand(d.toString().substring(0, d.length-1))
});
