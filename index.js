const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8080;
const homePage = fs.readFileSync('./index.html');
const aboutPage = fs.readFileSync('./about.html');
const contactPage = fs.readFileSync('./contact.html');
const errorPage = fs.readFileSync('./404.html');
const styles = fs.readFileSync('./styles.css');
const stylesJs = fs.readFileSync('./uiScript.js');
app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(homePage);
  res.end();
});
app.get('/index.html', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(homePage);
  res.end();
});

app.get('/about.html', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(aboutPage);
  res.end();
});

app.get('/contact.html', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(contactPage);
  res.end();
});

app.get('/styles.css', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.write(styles);
  res.end();
});

app.get('/uiScript.js', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/js' });
  res.write(stylesJs);
  res.end();
});

app.get('*', (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write(errorPage);
  res.end();
});
app.listen(port, () => console.log('app running...'));
