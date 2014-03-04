
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', name: 'Steve' });
};

exports.page2 = function(req, res){
  res.render('index', { title: 'Page 2', name: 'Steve Birkner' });
};
