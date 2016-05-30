'use strict';

(function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Router = require('react-router').Router;
    var Route = require('react-router').Route;
    var browserHistory = require('react-router').browserHistory;
    var Redirect = require('react-router').Redirect;

    // components
    var Home = require('./module/home/com/home');
    var Login = require('./module/login/com/login');

    ReactDOM.render(
        (
            <Router history={browserHistory}>
                <Route path="home" component={Home} />
                <Route path="login" component={Login} />
                <Redirect from="*" to="home" />
            </Router>
        ),
        document.getElementById('app')
    );
})();