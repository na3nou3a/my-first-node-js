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
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(homePage);
  // res.end();
  res.end(homePage);
});
app.get('/index.html', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(homePage);
  // res.end();
  res.end(homePage);
});

app.get('/about.html', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(aboutPage);
  // res.end();
  res.end(aboutPage);
});

app.get('/contact.html', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(contactPage);
  // res.end();
  res.end(contactPage);
});

app.get('/styles.css', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/css' });
  // res.write(styles);
  // res.end();
  res.end(styles);
});

app.get('/uiScript.js', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/js' });
  // res.write(stylesJs);
  // res.end();
  res.end(stylesJs);
});

app.get('*', (req, res) => {
  // res.writeHead(404, { 'Content-Type': 'text/html' });
  // res.write(errorPage);
  // res.end();
  res.end(errorPage);
});
app.listen(port, () => console.log('app running...'));
