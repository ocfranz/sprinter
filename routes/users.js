const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router();
const config = require('../config/config');

mongoose.connect(
  config.connection,
  {useUnifiedTopology: true, useNewUrlParser : true}
  , (err)=>{
  if(err){
      console.log('Error', err);
  }else{
      console.log('Conected');
  }
})
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'index.html'));
})

module.exports = router;
