var express = require('express')
  , server = express()
  , homepageView = require('./views/homepage')

server.use(express.static(__dirname + '/static'))

server.get('/', function (req, res, next) {

  homepageView(req, function (err, html) {
    if (err) return next(err)
    res.send(html)
  })
})

server.listen(process.env.PORT || 1337)
