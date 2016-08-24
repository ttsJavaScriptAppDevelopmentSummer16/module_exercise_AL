var Request = require('request-promise');
var data = {
  getPost: function(){
    Request('http://jsonplaceholder.typicode.com/posts/1')
      .then(function(resp){
        console.log(resp);
      });
  }
}

module.exports = data
