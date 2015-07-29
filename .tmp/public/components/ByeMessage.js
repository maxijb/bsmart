var React = require('react');

module.exports = components.ByeMessage = React.createClass({displayName: "ByeMessage",
  render: function() {
    return (
    	React.createElement("div", null, "Bye ", this.props.name)
    	);
  }
});



