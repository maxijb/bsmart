var React = require('react');
var Bye = require('./ByeMessage');

module.exports = components.HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function() {
    return (
    	React.createElement("div", {className: "wrapper"}, 
    		React.createElement("div", null, "Hello ", this.props.name), 
    		React.createElement(components.ByeMessage, {name: this.props.name})
    	)
    	);
  }
});



