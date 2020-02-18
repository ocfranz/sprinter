const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', function(req, res, next) {
    const { username, password, email, name } = req.body;
    const new_user = new User({ username, password, email, name})
    new_user.save()
    .then( data => {
        res.json(data)
    })
    .catch(err =>{
        res.json({ error : err})
    })
})

module.exports = router;
