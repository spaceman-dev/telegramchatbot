var token = '1013897161:AAGHr9FxsHoDUdOET7vsEELefFMqRPmzMBE';
var Bot = require('node-telegram-bot-api'),
bot = new Bot(token,{polling : true});
console.log('bot server started...');
bot.onText(/^\/mighty_mighty/,function(msg, match){
bot.sendMessage(msg.chat.id,'Yumit!').then(function (){});
});
bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});
var express = require('express');
var packageInfo = require('./package.json');

var app = express();

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});

