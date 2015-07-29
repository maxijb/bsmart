var React = require('react');
var TagsList = require('./TagsList');
var TagsCreate = require('./TagsCreate');
module.exports = React.createClass({
  
  componentDidMount: function() {
  },

  getInitialState: function() {
	 return {tags: (this.props.tags || null)};
  },


  render: function() {
    return (
    	<div className="tags-container">
    		<div className='tags-title'>My bookmarks</div>
    		<TagsList tags={this.state.tags} /> 
        <div className="maxi"></div>
        <TagsCreate create={this.createTag} />
    	</div>
    );
  }
});

