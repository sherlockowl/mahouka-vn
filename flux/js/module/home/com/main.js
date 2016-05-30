'use strict';
var React = require('react');

// components
var TopMenu = require('../../menu/com/top');
var VideoX = require('../../video/com/video');

var Main = React.createClass({
    render() {
        return (
            <div className="main">
                <TopMenu/>
                <VideoX />
            </div>
        )
    }
});

module.exports = Main;