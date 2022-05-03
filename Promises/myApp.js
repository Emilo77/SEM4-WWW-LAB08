const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
});

app.use('/', indexRouter);

app.use((req, res) => {
  res.render('error');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
