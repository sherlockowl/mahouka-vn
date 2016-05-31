'use strict';

var React = require('react');

var Chat = React.createClass({
    render() {
        return (
            <div className="chat">
                <div className="chat-header">
                    <span><i className="fa fa-comment" /></span>
                    <span>&nbsp;</span>
                    <b>Live Chat</b>
                    <span><i className="fa fa-cog pull-right" /></span>
                </div>
                <div className="chat-body">
                    <div className="say">
                        <b>User: </b>
                        <span>123412sdlkfjsdlf</span>
                    </div>
                    <div className="say">
                        <b>User: </b>
                        <span>123412sdlkfjsdlf</span>
                    </div>
                    <div className="say">
                        <b>User: </b>
                        <span>123412sdlkfjsdlf</span>
                    </div>
                    <div className="say">
                        <b>User: </b>
                        <span>123412sdlkfjsdlf</span>
                    </div>
                    <div className="say">
                        <b>User: </b>
                        <span>123412sdlkfjsdlf</span>
                    </div>
                    <div className="say">
                        <b>User: </b>
                        <span>123412sdlkfjsdlf</span>
                    </div>
                </div>
                <div className="chat-footer">
                    <input placeholder="Type chat here"/>
                    <span>&nbsp;</span>
                    <button>Send</button>
                </div>
            </div>
        )
    }
});

module.exports = Chat;