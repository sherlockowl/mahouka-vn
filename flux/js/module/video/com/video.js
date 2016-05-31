'use strict';

var React = require('react');

var Video = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="row">
                        <span className="video-title">Film Title Here</span>
                        <video controls autoPlay className="col-lg-12 video">
                            <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        )
    }
});

module.exports = Video;