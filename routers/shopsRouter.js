const express = require('express');
const { Shops } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const shops = new Shops();
    const data = await shops.getAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const shops = new Shops();
    const id = req.params.id;
    const data = await shops.getById(id);
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
    const shops = new Shops();
    const id = req.params.id;
    await shops.delete(id);
    res.send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const shops = new Shops();
    const id = req.params.id;
    const data = req.body;
    await shops.update(id, data);
    res.send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/:id', async (req, res) => {
  try {
    const shops = new Shops();
    const id = req.params.id;
    const data = req.body;
    await shops.create(id, data);
    res.send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;