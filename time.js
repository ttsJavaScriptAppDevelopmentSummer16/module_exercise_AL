var Moment = require('moment');
var time = {
    getTime: function(){
        console.log(new Moment().format("h:mm:ss a"));
    }
  }
module.exports = time
