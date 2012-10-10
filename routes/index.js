var stories = require('../lib/stories');

exports.index = function(req, res){
  res.render('index', { stories: stories.summary() });
};
