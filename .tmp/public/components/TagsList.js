var React = require('react');
var Tag = require('./Tag');
module.exports = React.createClass({displayName: "exports",
  
  componentDidMount: function() {
  },

  render: function() {

  	var items = this.props.tags.map(function (item, i) {
      return (
        React.createElement(Tag, {tag: item, key: item.id})
      );
    });

    return (
    	React.createElement("div", {className: "tags-list"}, 
    		items
    	)
    );
  }
});

