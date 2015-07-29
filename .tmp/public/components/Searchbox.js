var React = require('react');
var Scomp = {
	input: require('./SearchboxInput'),
	button: require('./SearchboxButton'),
	autocomplete: require('./AutocompleteList')
}


module.exports = components.Searchbox = React.createClass({displayName: "Searchbox",
  getInitialState: function() {
  	return {
  		autocompleteItems: [],
  		active: -1,
  		searchText: ''
  	};
  },

  handleSubmit: function(e) {
  	var selectedItem,
  		active = this.state.active;
  	 e.preventDefault();

  	 if (active > -1) {
  	 	selectedItem = this.state.autocompleteItems[active];
  	 	console.log(selectedItem);
  	 }
  },

  handleChange : function() {

  	 var text = React.findDOMNode(this.refs.search).value.trim(),
  	 	 that = this;

  	 this.setState({searchText: text});

  	 if (text.length < 3) {
  	 	 this.setState({autocompleteItems: []});
  	 	 this.setState({active: 1});
  	 } else {
	  	 $.get('/'+W.lang+'/autocomplete/' + text, function(response) {
  	 	 	that.setState({autocompleteItems: response.data});
	  	 });
  	 }
  },

  handleItemClick: function(order) {
  	var items = this.state.autocompleteItems,
  		active = this.state.active;

  	if (active > -1) items[active].active = false;
  	items[order].active = true; 
  	this.setState({active: order, autocompleteItems: items, searchText: items[active].name});
  },

  render: function() {
    return (
    	React.createElement("form", {id: "searchbox", onSubmit: this.handleSubmit}, 
    		React.createElement(Scomp.input, {value: this.state.searchText, ref: "search", changeHandler: this.handleChange}), 
    		React.createElement(Scomp.button, null), 
    		React.createElement(Scomp.autocomplete, {autocompleteItems: this.state.autocompleteItems, searchText: this.state.searchText, clickHandler: this.handleItemClick}), 
    		React.createElement("span", null, this.state.autocompleteItems.length)
    	)
    );
  }
});



