var React = require('react');
var TagsList = require('./TagsList');
var TagsCreate = require('./TagsCreate');
module.exports = React.createClass({displayName: "exports",
  
  componentDidMount: function() {
  },

  getInitialState: function() {
	 return {tags: (this.props.tags || null)};
  },


  render: function() {
    return (
    	React.createElement("div", {className: "tags-container"}, 
    		React.createElement("div", {className: "tags-title"}, "My bookmarks"), 
    		React.createElement(TagsList, {tags: this.state.tags}), 
        React.createElement("div", {className: "maxi"}), 
        React.createElement(TagsCreate, {create: this.createTag})
    	)
    );
  }
});

