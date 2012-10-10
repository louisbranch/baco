var stories = require('../lib/stories');

exports.index = function(req, res){
  stories.summary(function(err, body) {
    if (!err) {
      res.render('index', { stories: body.rows });
    }
  });
};
