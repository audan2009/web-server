var express = require('express');
var app = express();
var PORT = 3000;

//Lesson 47 AM Node
var middleware = {
  requireAuthentification: function(req, res, next){
    console.log('get out, none of your biz ness');
    next();
  },
  logger: function(req, res, next){
    var currentTime = new Date().toString();
    console.log(req.method + ' ' + req.originalUrl + ' at ' + currentTime);
    next();
  }
}

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