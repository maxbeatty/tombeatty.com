var http = require('http'),
    fs = require('fs'),
    qs = require('querystring'),
    email = require('./email'),
    send = function(res, path, httpCode) {
      if (httpCode === undefined) {
        httpCode = 200;
      }

      ext = path.split('.').pop();
      mimeType = 'text/html';
      switch (ext) {
        case 'jpg':
        case 'jpeg':
          mimeType = 'image/jpeg';
          break;
        case 'css':
          mimeType = 'text/css';
          break;
      }
      res.writeHead(httpCode, { 'Content-Type': mimeType });

      fs.createReadStream(path.slice(1)).pipe(res);
    },
    notFound = function (res) {
      send(res, '/404.html', 404);
    };

http.createServer(function (req, res) {
  switch (req.method) {
    case 'GET':
      switch (req.url) {
        case '/':
          send(res, '/index.html');
          break;

        case '/img/profile.jpg':
        case '/css/i.css':
        case '/css/i.min.css':
          send(res, req.url);
          break;
        default:
          notFound(res);
      }
      break;

    case 'POST':
      switch (req.url) {
        case '/':
          var body = '';
          req.on('data', function (chunk) {
            body +=chunk;
          });
          req.on('end', function () {
            var form = qs.parse(body);
            if (form.from && form.note) {
              // let mandrill validate further :shrug:
              email.send(form.from, form.note, function(err) {
                if (err) {
                  res.writeHead(500);
                  res.send(err.message);
                } else {
                  res.writeHead(200);
                  res.end('Sent!');
                }
              });
            } else {
              res.writeHead(400);
              res.end('Invalid submission');
            }
          });
          break;
        default:
          notFound(res);
      }
      break;
    default:
      notFound(res);
  }
}).listen(process.env.PORT || 3000);
