var React = require('react');

module.exports = components.AutocompleteItem = React.createClass({displayName: "AutocompleteItem",
  
  highlightText: function() {
  	var search = this.props.searchText,
  		name = this.props.item.name,
  		index = name.search(new RegExp(search, 'i')),
  		len = this.props.searchText.length;

  	if (index !== -1) {
	  	return ( 
	  		React.createElement("span", null, 
	  			name.substr(0, index), 
	  			React.createElement("b", null, name.substr(index, len)), 
	  			name.substr(index+len)
	  		)
	  	);
  	} else {
  		return (
  			React.createElement("span", null, name)
  		);
  	}
  },

  render: function() {
    return (
    	 React.createElement("li", {className: 'autocomplete-item ' + (this.props.item.active ? 'active': ''), 
    	 	 "data-id": this.props.item.name_id, 
    	 	 onClick: this.props.clickHandler.bind(null, this.props.order)
    	 }, 
    	 	this.highlightText()
    	 )
    	);
  }
});



