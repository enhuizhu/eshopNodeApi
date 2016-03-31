"use strict";

module.exports = class main extends Controller {
    welcome() {
        this.view.display("helloWorld");
    }
}
