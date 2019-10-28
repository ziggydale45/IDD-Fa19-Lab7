/*
client.js
Author: Nikolas Martelaro (nmartelaro@gmail.com)
Extended: David Goeicke (da.goedicke@gmail.com)
Purpose: This run the interactivity and communication for the web app. This file
is served to the users web browser and executes on the browser.
Usage: This file is called automatically when the webpage is served.
//--Addition. Added a button handling for the `Take a picture` button.
*/

// WebSocket connection setup
var socket = io();
var fs = require('fs')
  , gm = require('gm');

// send out LedOn message over socket
function ledON() {
  socket.emit('ledON');
}

// send out ledOFF message over socket
function ledOFF() {
  socket.emit('ledOFF');
}

//-- Addition: Forward the `Take a picture` button-press to the webserver.
function takePicture(){
  socket.emit('takePicture');
}

//-- Addition: This function receives the new image name and applies it to html element.

socket.on('newPicture', function(msg) {
  document.getElementById('pictureContainer').src=msg;
});
// read the data from the message that the server sent and change the
// background of the webpage based on the data in the message
socket.on('server-msg', function(msg) {
  msg = msg.toString();
  console.log('msg:', msg);
  switch (msg) {
    case "light":
      document.body.style.backgroundColor = "white";
      console.log("white")
      takePicture();
      // crazytown
      gm('/home/pi/IDD-Fa19-Lab7/public')
      .flip()
      .magnify()
      .rotate('green', 45)
      .blur(7, 3)
      .crop(300, 300, 150, 130)
      .edge(3)
      .write('/path/to/crazy.jpg', function (err) {
        if (!err) console.log('crazytown has arrived');
      })
      
      break;
    case "dark":
      document.body.style.backgroundColor = "black";
      console.log("black");
      break;
    default:
      //console.log("something else");
      break;
  }
});
