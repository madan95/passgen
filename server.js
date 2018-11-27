'use strict';

const express = require('express');

const PORT=8080;
const HOST='0.0.0.0';

var generatePassword = function(){
  var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  var length = 16;
  var pass = '';
  for (var x = 0; x < length; x++) {
    var i = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(i);
  }
  return pass;
}

const app = express();
app.get('/', (req, res) => {
  var newPassword = generatePassword();
  res.send(newPassword);
});

app.listen(PORT, HOST);
console.log('Running');
