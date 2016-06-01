'use strict';

var express = require('express');
var server = require('socket.io');
var config = require('./config');
var db = require('./database/db');

// instance io
var io = new server(config.PORT);

// instance app
//var app = express();

// initial
var film = io
    .of('/film')
    .on('connection', function (socket) {
        console.log('>>> Client film ' + socket.id + ' connected');
        socket.on('disconnect', function () {
            console.log('>>> Client film ' + socket.id + ' disconnected');
        });
        socket.on('get list film', function () {
            return db.getListFilm();
        });
        db.getListFilm()
            .then(function (result) {
                console.log(result)
                socket.emit('ready', result);
            });
    });

module.exports.film = film;