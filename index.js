const http = require('http');
const url = require('url');
const fs = require('fs');
const port = process.env.PORT || 8080;
const homePage = fs.readFileSync('./index.html');
const aboutPage = fs.readFileSync('./about.html');
const contactPage = fs.readFileSync('./contact.html');
const errorPage = fs.readFileSync('./404.html');
const styles = fs.readFileSync('./styles.css');
const stylesJs = fs.readFileSync('./uiScript.js');
http
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (
      url == '/' ||
      url == '/home' ||
      url == '/index.html' ||
      url == '/index'
    ) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(homePage);
      res.end();
    } else if (url == '/about' || url == '/about.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(aboutPage);
      res.end();
    } else if (url == '/contact' || url == '/contact.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(contactPage);
      res.end();
    } else if (url == '/styles.css') {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(styles);
      res.end();
    } else if (url == '/uiScript.js') {
      res.writeHead(200, { 'Content-Type': 'text/js' });
      res.write(stylesJs);
      res.end();
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(errorPage);
      res.end();
    }
  })
  .listen(port);
