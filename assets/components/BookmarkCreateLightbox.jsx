var React = require('react');
var ColorSelector = require('./ColorSelector');
var SelectOption = require('./SelectOption');


module.exports = React.createClass({
  
  componentDidMount: function() {
  },

  getInitialState: function() {
    return {
      url: '',
      title: ''
    }
  },

  handleChange: function(event) {
  	this.setState({value: event.target.value});
  },

  selectColor: function(color) {
  	this.setState({color: color});
  },

  confirm: function() {
    this.props.confirm(this.state.value, this.refs.colorSelector.state.active);
  },

  reset: function() {
    this.setState({value: ""});
    this.refs.colorSelector.reset();
  },

  render: function() {

  	return (
    	<div className={"bookmarktag-create-lightbox-dimmer " + (this.props.show ? "" : " hidden")}>
    		<div className='bookmark-create-lightbox'>
    			<p className='title'>New label</p>
    			<fieldset>
    				<p>URL</p>
            <input type="text" ref="url" onChange={this.handleChange} value={this.state.url} />
            <p>Title</p>
    				<input type="text" ref="title" onChange={this.handleChange} value={this.state.title} />
            <p>Tag</p>
            <SelectOption tags={this.props.tags} />
    			</fieldset>
    			<a className="button primary" onClick={this.confirm}>Create</a>
    			<a className="button" onClick={this.props.cancel}>Cancel</a>
    		</div>
    	</div>
    );
  }
});

