const express = require('express');
const path = require('path');

const app = express();

let port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('main');
});

app.listen(3000, () => {
  console.log('Github Travis Demo started!');
  console.log('Application running on port ' + port);;
});
