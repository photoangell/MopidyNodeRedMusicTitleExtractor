//remove this line in node red
var msg = require("./jsonsamples/stoppedplaying.json");

if (msg.data.attributes.media_position.startsWith("0:")) {
    msg = {};
    msg.payload = {};
    msg.payload.state = "stopped";
    return msg;
}

return "";