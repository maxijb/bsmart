var React = require('react');
module.exports = React.createClass({
  
  componentDidMount: function() {
  },

  getInitialState : function() {
    return {};
  },

  handleContentClick: function() {
    showList = this.state.showList;
    this.setState({showList: !showList});
    if (!showList) {
      document.addEventListener('click', this.hideList);
    }
  },

  hideList: function() {
    document.removeEventListener('click', this.hideList);
    this.setState({showList: false});
  },

  handleOptionClick: function(item) {
    this.setState({activeId: item.id, activeName: item.name});
  },

  getValue: function() {
    return { id: this.state.activeId || 0, name: this.state.activeName || "" };
  },

  render: function() {
    var _this = this;

    //generate options
    var items = this.props.tags.map(function (item, i) {
      var classAttr = "color-selector-item";// + (this.state.active == item ? "active": "");
      if (item == _this.state.active) classAttr += " active";

       return (
         <li data-id={item.id} onClick={_this.handleOptionClick.bind(_this, item)}>{item.name} </li>
       );
    });


    //Set active Variables
    var activeId = this.state.activeId || this.props.tags[0].id || -1;
    var activeName = this.state.activeName || this.props.tags[0].name || "Choose a tag";


  	return (
    	<div class="fancy-select">
        <div class='fancy-select-content' data-id={activeId} onClick={this.handleContentClick}>
          <span className="fancy-select-display">{activeName}</span>
        </div>
        <ul className={"fancy-select-list" + (this.state.showList ? " visible" : "")}>
        	{items}
        </ul>
    	</div>
    );
  }
});

