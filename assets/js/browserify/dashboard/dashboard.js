/*
* Behavior for index action
*/

var React = require('react'),
	tagsContainerComponent = require('../../../components/TagsContainer');

W.modules.startup.dashboard_action = (function($) {

	

		init = function() {

			React.render(React.createElement(tagsContainerComponent, {tags: W.data.tags}), document.getElementById('tags-wrapper'));


		}


	return {
		init: init, 
		condition: (W.request.action == 'dashboard')
	};


})(jQuery);



