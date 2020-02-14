let num = 0;
let value = [];
let socket;

function setup() {
  createCanvas(400, 200);
  // setup the port to receive OSC and to send OSC
  setupOsc(12000, 3334);
}

function draw() {
  background(255, 255, 0);
  text("we receiving OSC from Max: " + num, 10, 40);
  text("we send to Max mouseX: " + floor(mouseX), 10, 60);
  text("& mouseY: " + floor(mouseY), 85, 80);
  sendOsc('/mousePos', [int(mouseX), int(mouseY)]);
}

function receiveOsc(address, value) {
  // set our global variable equal to the value coming in from Max
  num = value;
}

function sendOsc(address, value) {
  // the address here must begin with a "/" and will be routed in the OSC-Route object in Max
  socket.emit('message', [address].concat(value));
}

function setupOsc(oscPortIn, oscPortOut) {
  // the port here must match the port in bridge.js that runs in Node object in Max
  socket = io.connect('http://127.0.0.1:8082', { port: 8082, rememberTransport: false });
  socket.on('connect', function() {
    socket.emit('config', {
      server: { port: oscPortIn,  host: '127.0.0.1'},
      client: { port: oscPortOut, host: '127.0.0.1'}
    });
  });
  socket.on('message', function(msg) {
    if (msg[0] == '#bundle') {
      for (var i=2; i<msg.length; i++) {
        receiveOsc(msg[i][0], msg[i].splice(1));
      }
    } else {
      receiveOsc(msg[0], msg.splice(1));
    }
  });
}
