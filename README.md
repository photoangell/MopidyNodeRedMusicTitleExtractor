# Mopidy NodeRed MusicTitleExtractor

js function for NodeRed to get a meaningful whats playing title out of Mopidy

Mopidy is hooked into Node Red via Home Assistant. 
There's an Events:State Changed node which monitors Mopidy
That pipes directly into this function
The Payload is then sent to a MQTT publish

In my configuration the MQTT is picked up by a NodeMCU ESP8266 board hooked up to an old Ciseco PiLite which displays the title.

Requires nodejs installed to test, for NodeRed, just put the code in main.js into a function (theres a couple of lines to comment out)