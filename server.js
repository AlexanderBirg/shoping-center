const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const newsRoutes = require('./routers/newsRouter');
const shopsRoutes = require('./routers/shopsRouter');

const app = express();
const PORT = 8000;

// Настройка Nunjucks
nunjucks.configure('public', {
  autoescape: true,
  express: app
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// маршруты
app.use('/news', newsRoutes);
app.use('/shops', shopsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`);
});
