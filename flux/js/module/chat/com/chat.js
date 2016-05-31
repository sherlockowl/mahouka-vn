'use strict';

var React = require('react');

var Chat = React.createClass({
    render() {
        return (
            <div className="chat">
                <div className="chat-header">
                    Live chat
                </div>
                <div className="chat-body">
                    <b>User: </b>
                    <span>123412sdlkfjsdlf</span>
                </div>
                <div className="chat-footer">
                    <input placeholder="Type chat here"/>
                    <button>Send</button>
                </div>
            </div>
        )
    }
});

module.exports = Chat;