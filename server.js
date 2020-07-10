const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('connect-history-api-fallback')()) 
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
app.listen(port, () => console.log("Listening on Port", port)) 