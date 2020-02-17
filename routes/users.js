const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router();
const config = require('../config/config');


router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'index.html'));
})

module.exports = router;
