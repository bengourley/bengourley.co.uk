var express = require('express')
  , server = express()
  , auth = require('basic-auth')
  , homepageView = require('./views/homepage')

server.use(express.static(__dirname + '/static'))

server.get('/', function (req, res, next) {

  var credentials = auth(req)

  if (!credentials || credentials.name !== 'guybrush' || credentials.pass !== 'mightypirate') {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    return res.end('Access denied')
  }

  homepageView(req, function (err, html) {
    if (err) return next(err)
    res.send(html)
  })
})

server.listen(process.env.PORT || 1337)
