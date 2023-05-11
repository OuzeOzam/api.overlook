const express = require('express');

const emojis = require('./emojis');
const heroes = require('./heroes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/heroes', heroes);

module.exports = router;
