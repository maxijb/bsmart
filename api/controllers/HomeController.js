/**
 * NameController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var Hello = require('../../assets/components/HelloMessage.jsx');
var searchboxComponent = require('../../assets/components/Searchbox.jsx');
var loginComponent = require('../../assets/components/Login.jsx');
var tagsContainer = require('../../assets/components/TagsContainer.jsx');




module.exports = { 
    
  

	index : function(req, res) {
		req.W.request.action = 'index';
		if (req.W.user) {
			res.redirect('/dashboard');
		}

		res.view({ W: req.W, markup: helpers.reactRender(components.HelloMessage, {name: 'maxi'})});
	},


	tweets_index: function(req, res) {
		req.W.request.action = 'tweets_index';
		res.view({W: req.W, searchboxComponent: helpers.reactRender(searchboxComponent, {})});
	},

	dashboard: function(req, res) {
		if (!req.W.user) {
			res.redirect('/');
		} else {
			req.W.request.action = 'dashboard';

			Tag.find({user_id: req.W.user.id})
				.then(function(tags) {
					res.view({W: req.W, 
							  data: {tags: tags},
							  loginComponent: helpers.reactRender(loginComponent, {user: req.W.user}), 
							  tagsContainer: helpers.reactRender(tagsContainer, {tags: tags}) 
							});
				});
			
		}
	},


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to NameController)
   */
  _config: {}

  
};