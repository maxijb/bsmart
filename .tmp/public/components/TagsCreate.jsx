var React = require('react');
var TagsCreateLightbox = require('./TagsCreateLightbox');
module.exports = React.createClass({
  
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
    	<div className="tag-create">
    		<p className='tag-create-line'>
    			<a className="button" onClick={this.openCreateTagLightbox}>Create new tag</a>
    		</p>
    		<TagsCreateLightbox confirm={this.create} cancel={this.closeCreateTagLightbox} show={this.state.showLightbox} />
    	</div>
    );
  }
});

