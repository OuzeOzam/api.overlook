const express = require('express');
const fetchOverData = require('../scrapper');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await fetchOverData();
  res.json(data);
});

module.exports = router;
