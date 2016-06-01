'use strict';

var sqlite3 = require('sqlite3').verbose();
var sql = require('./sql');
var q = require('q');

var Database = function () {
    var self = this;
    self.conn = new sqlite3.Database('./mahouka-vn.db');
    self.sql = sql;
};

var db = Database.prototype;

db.getListFilm = function () {
    var self = this;
    return q.when()
        .then(function () {
            return self.conn.get(self.sql.GET_LIST_FILM, function(err, row) {
                return row;
            });
        })
        .then(function (result) {
            return result;
        });

};

var _db = new Database();
module.exports = _db;