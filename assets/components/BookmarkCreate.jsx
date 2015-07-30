var React = require('react');
var BookmarkCreateLightbox = require('./BookmarkCreateLightbox');


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

  create: function(name, color) {

    var _this = this;
    this.setState({loading: true});
    
    ///TODO: user should come from the cookie in server side
    $.post('/resource/create', {user_id: W.user.id, name: name, color: color}, function(data) {
        //parent create
        _this.props.create(data);
        _this.setState({loading: false});
        _this.closeCreateLightbox();
    });

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

