var React = require('react');
var Tag = require('./Tag');
module.exports = React.createClass({
  
  componentDidMount: function() {
  },

  render: function() {
  	console.log(this.props);
  	return (
    	<div className="tag" data-id={this.props.tag.id}>
    		<p className='name'>
    			{this.props.tag.name}
    			<a className="remove-button" onClick={this.props.remove.bind(this, this.props.tag.id)}>X</a>
    		</p>
    	</div>
    );
  }
});

