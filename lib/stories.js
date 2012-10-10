var db = require('nano')('http://localhost:5984/stories');

function summary(callback) {
  db.view('stories', 'summary', {limit: '10', descending: true}, callback);
}
exports.summary = summary;
