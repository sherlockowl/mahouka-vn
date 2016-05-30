'use strict';

(function(){
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Router = require('react-router').Router;
    var Route = require('react-router').Route;
    var browserHistory = require('react-router').browserHistory;

    // components
    var Home = require('./module/home/com/home');

    ReactDOM.render(
        (
            <Router history={browserHistory}>
                <Route path="home" component={Home}/>
            </Router>
        ),
        document.getElementById('app')
    );
})();