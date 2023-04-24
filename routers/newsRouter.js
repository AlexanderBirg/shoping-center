const express = require('express');
const { News } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const news = new News();
    const data = await news.getAll();
    data.forEach(item => {
      let date = new Date(Date.parse(item.date_published));
      item.day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      item.month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      item.year = date.getFullYear();
    });
    // res.json(data);
    // Рендеринг шаблона
    res.render('test.html', { data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const news = new News();
    const id = req.params.id;
    const data = await news.getById(id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const news = new News();
    const id = req.params.id;
    await news.delete(id);
    res.send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const news = new News();
    const id = req.params.id;
    const data = req.body;
    await news.update(id, data);
    res.send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/:id', async (req, res) => {
  try {
    const news = new News();
    const id = req.params.id;
    const data = req.body;
    await news.create(id, data);
    res.send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;