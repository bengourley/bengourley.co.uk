module.exports = render

var jade = require('jade')
  , template = jade.compileFile(__dirname + '/../source/templates/homepage.jade')

function render(req, cb) {
  try {
    var html = template({ req: req })
    cb(null, html)
  } catch (e) {
    return cb(e)
  }
}
