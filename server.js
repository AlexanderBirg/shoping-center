const express = require('express'); // Подключаем Express.js
const path = require('path'); // Подключаем модуль path для работы с путями файлов

const app = express(); // Создаем экземпляр приложения Express

// Указываем путь к папке со статическими файлами (css, js, изображения и т.д.)
app.use(express.static(path.join(__dirname, 'public')));

// Определяем маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Отправляем файл index.html клиенту
});

// Определяем маршрут для страницы со списком магазинов
app.get('/magaziny', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'magaziny.html')); // Отправляем файл magaziny.html клиенту
});

// Определяем маршрут для страницы новостей
app.get('/novosti', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'novosti.html')); // Отправляем файл novosti.html клиенту
});

// Определяем маршрут для страницы новости с определенным id
app.get('/novosti/:id', (req, res) => {
  const id = req.params.id; // Получаем id из параметра запроса
  res.send(`Страница новости с id ${id}`); // Отправляем ответ клиенту с использованием id
});

// Определяем маршрут для страницы акций
app.get('/akcii', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'akcii.html')); // Отправляем файл akcii.html клиенту
});

// Определяем маршрут для страницы акции с определенным id
app.get('/akcii/:id', (req, res) => {
  const id = req.params.id; // Получаем id из параметра запроса
  res.send(`Страница акции с id ${id}`); // Отправляем ответ клиенту с использованием id
});

// Определяем маршрут для страницы "О ТЦ"
app.get('/o-tc', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'o-tc.html')); // Отправляем файл o-tc.html клиенту
});

// Определяем маршрут для страницы контактов
app.get('/kontakty', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kontakty.html')); // Отправляем файл kontakty.html клиенту
});

const port = process.env.PORT || 3000; // Задаем номер порта для сервера

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Выводим сообщение в консоль при запуске сервера
});
