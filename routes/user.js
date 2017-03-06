var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set( 'view engine', 'jade');
app.use(express.bodyParser());
app.get('/users/:userId',function(req, res){
  response.render('index',{
    title: 'Hola Usuario',
    username: 'oscar'
  });
});
app.listen(8084,function (){
  console.log('express escuchando en el puerto 8084')
});

