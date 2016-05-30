'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var logger = require('morgan');
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');

var ECT = require('ect');
var CONFIG = require('./config');

var app = express();

// Logger morgan
if (!CONFIG.ENVIRONMENT.DEV) {
    var logDirectory = path.join(__dirname, 'log');
    // ensure log directory exists
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

    // create a rotating write stream
    var accessLogStream = FileStreamRotator.getStream({
        date_format: 'YYYYMMDD',
        filename: path.join(logDirectory, 'access-%DATE%.log'),
        frequency: 'daily',
        verbose: false
    });
}
app.use(logger('tiny', {stream: accessLogStream}));

// Set ECT view engine
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './assets'));
app.engine('html', ECT({watch: true, root: path.join(__dirname, './assets'), ext: '.html'}).render);

// Set public folder
var staticConfig = {maxAge: 3600000};
app.use('/css/', express.static(path.join(__dirname, './assets/css/'), staticConfig));
app.use('/fonts/', express.static(path.join(__dirname, './assets/fonts/'), staticConfig));
app.use('/images/', express.static(path.join(__dirname, './assets/images/'), staticConfig));
app.use('/js/', express.static(path.join(__dirname, './assets/js/'), staticConfig));

// Set app router
router.get('/*', function (req, res) {
    res.render('index');
});
app.use('/', router);

// App start
app.listen(CONFIG.APP.PORT, function() {
    console.log('Express server listening on ' + CONFIG.APP.PORT);
});