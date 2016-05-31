'use strict';
var React = require('react');

// components
var TopMenu = require('../../menu/com/top');
var VideoX = require('../../video/com/video');
var Chat = require('../../chat/com/chat');

var Main = React.createClass({
    render() {
        return (
            <div className="main container-fluid">
                <TopMenu/>
                <VideoX />
                <Chat />
                <footer>
                    Copyright © 2016 by Mahouka VN. All rights reserved.
                </footer>
            </div>
        )
    }
});

module.exports = Main;