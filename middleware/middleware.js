module.exports = {
  requireAuthentification: function(req, res, next){
    console.log('get out, none of your biz ness');
    next();
  },
  logger: function(req, res, next){
    var currentTime = new Date().toString();
    console.log(req.method + ' ' + req.originalUrl + ' at ' + currentTime);
    next();
  }
};