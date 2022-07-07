const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./public'));
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './404.html'));
});
app.listen(port, () => console.log('app running...'));
