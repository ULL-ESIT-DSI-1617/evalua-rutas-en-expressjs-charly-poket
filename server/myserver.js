var express = require('express')
var app = express()
var path = require('path');
var router = express.Router();

module.exports = router;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
 // res.render('index', { title: 'Express' });
})
var server = app.listen(8084, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
