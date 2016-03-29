var view = require("../view.js");

module.exports = class route {
	constructor(app) {
		this.controllers = {};
		this.app = app;
		this.setUpRoutes();
	}

	response(obj, req, res) {
		if( typeof this.controllers[ obj.controller ] == 'undefined' ) {
			this.controllers[ obj.controller ] = require("../controllers/" + obj.controller +  ".js");
			this.controllers[ obj.controller ] = this.controllers[obj.controller];	
		}
		
		this.controllers[obj.controller][obj.action](req, res);
	}

	setUpRoutes() {
		this.app.get('/', function(req, res) {
	   		view.display("helloWorld",res);
		});
	}
}
