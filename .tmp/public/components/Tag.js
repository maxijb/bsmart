var React = require('react');
var Tag = require('./Tag');
module.exports = React.createClass({displayName: "exports",
  
  componentDidMount: function() {
  },

  render: function() {

  	return (
    	React.createElement("div", {className: "tag", "data-id": this.props.tag.id}, 
    		React.createElement("p", {className: "name"}, this.props.tag.name)
    	)
    );
  }
});

