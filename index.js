const http = require('http');
const url = require('url');
const fs = require('fs');
const port = process.env.PORT || 8080;

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const pathName = q.pathname;
    let fileName;
    if (
      pathName == '/' ||
      pathName == '/index.html' ||
      pathName == 'index' ||
      pathName == 'home.html' ||
      pathName == 'home'
    ) {
      fileName = './index.html';
    } else if (pathName == '/about.html' || pathName == 'about') {
      fileName = './about.html';
    } else if (pathName == '/contact.html' || pathName == 'contact') {
      fileName = './contact.html';
    } else {
      fileName = './404.html';
    }
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
      }

      res.write(data);
      return res.end();
    });
  })
  .listen(port);
