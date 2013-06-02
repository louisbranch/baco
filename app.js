var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var hbs = require('hbs');
var fs = require('fs');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
  hbsPrecompiler = require('handlebars-precompiler');
  hbsPrecompiler.watchDir(
    __dirname + "/views",
    __dirname + "/assets/javascripts/templates.js",
    ['handlebars', 'hbs']
  );
});

function loadPartial(name) {
  var file = fs.readFileSync(__dirname + '/views/'+name+'.hbs', 'utf8');
  hbs.registerPartial(name, file);
}

loadPartial('header');
loadPartial('menu');

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'));
