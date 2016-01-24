var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware/middleware');

//Lesson 47 AM Node


//important to specify before app.get
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentification, function(req, res){
  res.send('this is the about page');
});

//you now have access to anything in this folder, even without specifying a route
app.use(express.static(__dirname + '/public'));



app.listen(PORT, function(){
  console.log('lets go cap ' + PORT);
});