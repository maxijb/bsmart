var React = require('react');

module.exports = components.SearchboxButton = React.createClass({displayName: "SearchboxButton",
  render: function() {
    return (
    	React.createElement("button", {type: "submit", className: "btn-primary"}, "Search")
    	);
  }
});



