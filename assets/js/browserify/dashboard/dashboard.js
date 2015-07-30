/*
* Behavior for index action
*/

var React = require('react'),
	TagsContainer = require('../../../components/TagsContainer');
	BookmarkCreate = require('../../../components/BookmarkCreate');

W.modules.startup.dashboard_action = (function($) {

	

		init = function() {

			React.render(React.createElement(TagsContainer, {tags: W.data.tags}), document.getElementById('tags-wrapper'));
			React.render(React.createElement(BookmarkCreate, {tags: W.data.tags}), document.getElementById('new-bookmark'));


		}


	return {
		init: init, 
		condition: (W.request.action == 'dashboard')
	};


})(jQuery);



