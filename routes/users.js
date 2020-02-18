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

router.post('/check-name', async function(req, res, next){
    const { attribute } = req.body;
    let user = null;
    switch (attribute){
        case "username":
            const { username } = req.body;
            user = await User.findOne({ username : username}).exec();
            break;
        case "email":
            const { email } = req.body;
            user = await User.findOne({ email : email}).exec();
            break;
        default:
            throw new Error('Error: validation attribute');
    }
    if(!user){
        res.json({ data : `Valid ${attribute}`, valid : true});
    }else{
        res.json({ data : `Invalid ${attribute}`, valid : false});
    }
})

module.exports = router;
