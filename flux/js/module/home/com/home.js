var React = require('react');

// components
var Main = require('./main');

var Home = React.createClass({
    render() {
        return (
            <div>
                {/* check login here */}
                <Main />
            </div>
        )
    }
});

module.exports = Home;