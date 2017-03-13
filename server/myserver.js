var express = require('express')
var app = express()
var path = require('path');
var router = express.Router();
//var users = require('../routes/user');

//app.use('/users', users);
module.exports = router;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
})

app.get('/public', function (req, res) {

  res.send('Got a GET request'+'<br/><img src="smile.png" />');

})

app.get('/user/:id?', function (req, res) {
  console.log('req.params.id: '+(req.params.id));
  console.log('Request Type:', req.method);
  console.log('Request Path:', req.path);
  //res.send('USUARIO: '+(req.params.id || 'unknown' ));
  res.render('index', { title: '/user/' ,username: req.params.id });
});

var server = app.listen(8084, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
