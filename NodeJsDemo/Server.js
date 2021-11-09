var http = require('http')
http.createServer(function (req, res) {
  res.write("Hello mswd ,NodeJs Server")
  res.end()
}).listen(2000)