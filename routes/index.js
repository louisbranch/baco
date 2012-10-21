var stories = require('../lib/stories');

var favorites = [
  {name: 'Escrever Conto', icon: 'pencil'},
  {name: 'Mais Recentes', icon: 'inbox'},
  {name: 'Mais Lidos', icon: 'eye-open'},
  {name: 'Mais Votados', icon: 'star'},
  {name: 'Conto Aleatorio', icon: 'random'}
];

exports.index = function(req, res){
  stories.summary(function(err, body) {
    if (!err) {
      res.render('index', { stories: body.rows, favorites: favorites });
    }
  });
};
