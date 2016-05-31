'use strict';

var React = require('react');

var Video = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-lg-2">
                    <Video.ListEpisode />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="video-title">
                            <span><i className="fa fa-play-circle" /></span>
                            <span>&nbsp;</span>
                            <span>Mahouka Koukou Rettousei</span>
                            <span>&nbsp; <i className="fa fa-arrow-right"/> &nbsp;</span>
                            <span>Episode 1</span>
                        </div>
                        <video controls autoPlay className="col-lg-12 video">
                            <source
                                src="https://evsweb1151.idrive.com/evs/datafiles/Phim%20Ho%E1%BA%A1t%20H%C3%ACnh%20C%E1%BB%95%20T%C3%ADch%20Vi%E1%BB%87t%20Nam%20Vui%20Nh%E1%BB%99n%20Qu%E1%BA%A3%20Tr%E1%BB%A9ng%20Th%C3%B4ng%20Minh.mp4?token=c07e469d135442298c34c08e50d8f9e1"
                                type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        )
    }
});

Video.ListEpisode = React.createClass({
    render() {
        if (false) {
            return (
                <div className="list-episode absolute">
                    <div className="loader relative col-lg-2"></div>
                </div>
            )
        }
        return (
            <div className="list-episode">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span><i className="fa fa-list" /></span>
                        <span> List Episode</span>
                    </div>
                    <div className="panel-body">
                        <button className="btn">
                            Tap 1
                        </button>
                        <button className="btn">
                            Tap 2
                        </button>
                        <button className="btn">
                            Tap 3
                        </button>
                        <button className="btn">
                            Tap 4
                        </button>
                        <button className="btn">
                            Tap 5
                        </button>
                        <button className="btn">
                            Tap 6
                        </button>
                        <button className="btn">
                            Tap 7
                        </button>
                        <button className="btn">
                            Tap 8
                        </button>
                        <button className="btn">
                            Tap 9
                        </button>
                        <button className="btn">
                            Tap 10
                        </button>
                        <button className="btn">
                            Tap 11
                        </button>
                        <button className="btn">
                            Tap 12
                        </button>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Video;