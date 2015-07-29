var React = require('react');
var Tag = require('./Tag');
module.exports = React.createClass({
  
  componentDidMount: function() {
  },

  render: function() {

  	return (
    	<div className="tag" data-id={this.props.tag.id}>
    		<p className='name'>{this.props.tag.name}</p>
    	</div>
    );
  }
});

