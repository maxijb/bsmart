var React = require('react');

module.exports = components.SearchboxInput = React.createClass({displayName: "SearchboxInput",
  render: function() {
    return (
    	React.createElement("input", {type: "text", className: "searchbox-input", value: this.props.searchText, onChange: this.props.changeHandler})
    	);
  }
});



