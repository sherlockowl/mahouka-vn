'use strict';

var React = require('react');

var Video = React.createClass({
    render() {
        return (
            <div className="row">
                <video controls>
                    <source src="video.mp4" type="video/mp4" />
                </video>
                This browser is not support
            </div>
        )
    }
});

module.exports = Video;