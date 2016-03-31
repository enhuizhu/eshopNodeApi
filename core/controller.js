module.exports = class Controller {
	constructor() {
		this.view = require("./view");
	}
	/**
	* function to load model
	**/
	loadModel(modelName){
		this[modelName] = require("../models/" + modelName);
	}
}