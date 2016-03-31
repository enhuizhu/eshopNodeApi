"use strict";

module.exports = {
    data:{},
 	
 	setRespAndReq: (res, req) => {
    	this.res = res;
    	this.req = req;
    },
    
    assign: (key, value) => {
        this.data[key] = value;
    },

    display : (fileName, res) => {         
       	this.res.render(fileName , this.data);
    }
}
