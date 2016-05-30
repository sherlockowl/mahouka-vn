'use strict';
var React = require('react');

// components
var TopMenu = require('../../menu/com/top');

var Main = React.createClass({
    render() {
        return (
            <div className="main">
                <TopMenu/>
            </div>
        )
    }
});

module.exports = Main;