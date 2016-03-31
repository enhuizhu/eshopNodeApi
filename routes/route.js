module.exports = class route {
	constructor(app) {
		this.controllers = {};
		this.app = app;
		this.setUpRoutes();
	}

	response(obj) {
		if( typeof this.controllers[ obj.controller ] == 'undefined' ) {
			this.controllers[ obj.controller ] = require("../controllers/" + obj.controller);
			this.controllers[ obj.controller ] = new this.controllers[obj.controller];	
		}
		
		this.controllers[obj.controller][obj.action]();
	}

	setUpRoutes() {
		var that = this;
		
		this.app.get('/', function(req, res) {
	   		view.display("helloWorld");
		});

		this.app.get("/test", function(req, res) {
			that.response({
				controller: 'main',
				action: 'welcome'
			});
		})
	}
}
