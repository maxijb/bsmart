var React = require('react');
var Tag = require('./Tag');
module.exports = React.createClass({
  
  componentDidMount: function() {
  },

  render: function() {

  	var items = this.props.tags.map(function (item, i) {
      return (
        <Tag tag={item} key={item.id} />
      );
    });

    return (
    	<div className="tags-list">
    		{items}
    	</div>
    );
  }
});

