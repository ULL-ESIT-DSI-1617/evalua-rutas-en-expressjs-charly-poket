var connect = require('connect');
var http = require('http');
var app = connect();
var server = app.listen(8084);
var server = http.createServer(app);


app.use('/routes', function (req, res, next) {

})

/*
app.use('/users/:userId', function userMiddleware(req, res, next) {
  // req.url starts with "/foo"
  next();
});
app.use('/users/:userId', function userinfoMiddleware(req, res, next) {
  // req.url starts with "/bar"
  next();
});
*/
