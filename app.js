var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('hello world ' + req.msg);
});

app.listen(3000);