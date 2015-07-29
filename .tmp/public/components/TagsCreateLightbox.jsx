var React = require('react');
var ColorSelector = require('./ColorSelector');
module.exports = React.createClass({
  
  componentDidMount: function() {
  },

  handleChange: function(event) {
  	this.setState({value: event.target.value});
  },

  selectColor: function(color) {
  	this.setState({color: color});
  },

  render: function() {

  	return (
    	<div className={"tag-create-lightbox-dimmer " + (this.props.show ? "" : " hidden")}>
    		<div className='tag-create-lightbox'>
    			<p className='title'>New label</p>
    			<fieldset>
    				<p>Name your new label</p>
    				<input type="text" id="tag-create-input" onChange={this.handleChange} />
    				<p>Pick a color</p>
    				<ColorSelector select={this.selectColor}/>
    			</fieldset>
    			<a className="button primary" onClick={this.props.confirm}>Create</a>
    			<a className="button" onClick={this.props.cancel}>Cancel</a>
    		</div>
    	</div>
    );
  }
});

