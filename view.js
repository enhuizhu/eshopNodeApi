"use strict";

module.exports = {
    data:{},

    assign: (key, value) => {
        this.data[key] = value;
    },

    display : (fileName, res) => {         
       	res.render(fileName , this.data);
    }
}

