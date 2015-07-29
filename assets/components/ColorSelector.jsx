var React = require('react');
module.exports = React.createClass({
  
  componentDidMount: function() {
  },
  getDefaultProps: function() {
    return {
      colors: ["000", "666", "333", "ccc", "ddd"]
    };
  },

  render: function() {






  	var items = this.props.colors.map(function (item, i) {
	  	var style = {
	  		"background": "#"+item
	  	}
       return (
         <div className="color-selector" data-color={item} style={style}>
         </div>
       );
    });


  	return (
    	<div className="color-selector">
    		{items}
    	</div>
    );
  }
});

