const express = require('express');
const path = require('path');

const app = express();

let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use('/', require('./routers/main'));
app.use('/members', require('./routers/members'));

app.listen(port, () => {
  console.log('Github Travis Demo started!');
  console.log('Application running on port ' + port);;
});

module.exports = app;
