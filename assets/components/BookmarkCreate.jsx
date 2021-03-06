var React = require('react');
var BookmarkCreateLightbox = require('./BookmarkCreateLightbox');
var _ = require('lodash');
var pubsub = require('./Utils/PubSub');

module.exports = React.createClass({
  
  componentDidMount: function() {
  },

  getInitialState: function() {
    return {
      showLightbox: false,
      tags: this.props.tags
    }
  },

  openCreateLightbox: function() {
  	this.setState({showLightbox: true}); 
  },

  closeCreateLightbox: function() {
  	this.setState({showLightbox: false});
    this.refs.lightbox.reset();
  },

  create: function(bookmark) {

    var _this = this;

    console.log(bookmark);
    pubsub.emit("ACTION:bookmark-create", 
                
                    _.extend({user_id: W.user.id}, bookmark), 
                
                    function() {
                        _this.setState({loading: false});
                        _this.closeCreateLightbox();
                    }
                );
      
   

  },

  render: function() {

  	return (
    	<div className="bookmark-create">
    		<p className='bookmark-create-line'>
    			<a className="button" onClick={this.openCreateLightbox}>Create new Bookmark</a>
    		</p>
    		<BookmarkCreateLightbox ref="lightbox" confirm={this.create} cancel={this.closeCreateLightbox} show={this.state.showLightbox} tags={this.state.tags} />
    	</div>
    );
  }
});

