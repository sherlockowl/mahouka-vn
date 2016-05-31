'use strict';

var React = require('react');

var Top = React.createClass({
    render() {
        return (
            <div className="row top-menu">
                <Top.Left />
                <Top.Right />
            </div>
        )
    }
});

Top.Left = React.createClass({
    render() {
        return (
            <div className="top-left col-lg-6">
                <h1>
                    {/**/}
                </h1>
            </div>
        )
    }
});

Top.Right = React.createClass({
    render() {
        return (
            <div className="top-right col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-default"><i className="fa fa-home"/> Mahouka VN</button>
                    <span>&nbsp;</span>
                    <button className="btn btn-default"><i className="fa fa-film"/> Film</button>
                    <span>&nbsp;</span>
                    <button className="btn btn-default"><i className="fa fa-xing"/> Anime</button>
                </div>
            </div>
        )
    }
});

module.exports = Top;