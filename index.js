var WebSocket = require('ws');
var ws = new WebSocket('wss://api.hitbtc.com/api/2/ws');

ws.on('open', function() {
  ws.send(JSON.stringify({"method":"subscribeTicker","params":{"symbol":"BTCUSD"},"id":123}));
});
ws.on('message', function(data, flags) {
  console.log(data);
});