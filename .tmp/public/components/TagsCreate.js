var React = require('react');
var TagsCreateLightbox = require('./TagsCreateLightbox');
module.exports = React.createClass({displayName: "exports",
  
  componentDidMount: function() {
  },

  getInitialState: function() {
    return {
      showLightbox: false
    }
  },

  openCreateTagLightbox: function() {
  	this.setState({showLightbox: true});
  },

  closeCreateTagLightbox: function() {
  	this.setState({showLightbox: true});
  },

  create: function() {

  },

  render: function() {

  	return (
    	React.createElement("div", {className: "tag-create"}, 
    		React.createElement("p", {className: "tag-create-line"}, 
    			React.createElement("a", {className: "button", onClick: this.openCreateTagLightbox}, "Create new tag")
    		), 
    		React.createElement(TagsCreateLightbox, {confirm: this.create, cancel: this.closeCreateTagLightbox, show: this.state.showLightbox})
    	)
    );
  }
});

