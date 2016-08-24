var data = require('./data')
var time = require('./time')
//function logResponse(resp){
  time.getTime()
//}

// setInterval(function(){
//   Request('http://jsonplaceholder.typicode.com/posts/1')
//     .then(logResponse)
// },3000)

data.getPost()
