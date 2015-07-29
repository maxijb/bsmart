var React = require('react');
var ColorSelector = require('./ColorSelector');
module.exports = React.createClass({displayName: "exports",
  
  componentDidMount: function() {
  },

  handleChange: function(event) {
  	this.setState({value: event.target.value});
  },

  selectColor: function(color) {
  	this.setState({color: color});
  },

  render: function() {

  	return (
    	React.createElement("div", {className: "tag-create-lightbox-dimmer " + (this.props.show ? "" : " hidden")}, 
    		React.createElement("div", {className: "tag-create-lightbox"}, 
    			React.createElement("p", {className: "title"}, "New label"), 
    			React.createElement("fieldset", null, 
    				React.createElement("p", null, "Name your new label"), 
    				React.createElement("input", {type: "text", id: "tag-create-input", onChange: this.handleChange}), 
    				React.createElement("p", null, "Pick a color"), 
    				React.createElement(ColorSelector, {select: this.selectColor})
    			), 
    			React.createElement("a", {className: "button primary", onClick: this.props.confirm}, "Create"), 
    			React.createElement("a", {className: "button", onClick: this.props.cancel}, "Cancel")
    		)
    	)
    );
  }
});

