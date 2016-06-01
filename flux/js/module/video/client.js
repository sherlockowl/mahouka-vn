'use strict';

var socketClient = require('socket.io-client');

var io = socketClient.connect('http://localhost:3001/film');

io.on('ready', function (filmList) {
    console.log(filmList);
});