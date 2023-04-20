const express = require('express');
const path = require('path');

const app = express();

// Указываем путь к папке со статическими файлами (css, js, изображения и т.д.)
app.use(express.static(path.join(__dirname, 'public')));

// Определяем маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Определяем маршрут для страницы со списком магазинов
app.get('/shops', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'shops.html'));
});

// Определяем маршрут для страницы новостей
app.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'news.html'));
});

// Определяем маршрут для страницы новости с определенным id
app.get('/news/:id', (req, res) => {
  const id = req.params.id; // Получаем id из параметра запроса
  res.send(`Страница новости с id ${id}`); // Отправляем ответ клиенту с использованием id
});

// Определяем маршрут для страницы "О ТЦ"
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Определяем маршрут для страницы контактов
app.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contacts.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
