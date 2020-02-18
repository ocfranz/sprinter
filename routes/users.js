const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', function(req, res, next) {
    const { username, password, email, name } = req.body;
    const new_user = new User({ username, password, email, name})
    try{
        new_user.save()
        .then( data => {
            res.json(data)
        })
        .catch(err =>{
            res.json({ error : err})
        })
    }catch(err){
        console.log(err);
    }
   
    next();
})

router.post('/login', async function(req, res, next){
    const { username, password} = req.body;
    try {
        const user = await UserModel.findOne({ username }).exec();
        if(!user) {
            return response.status(400).send({ message: "The username does not exist" });
        }
        user.comparePassword( password, (error, match) => {
            if(!match) {
                return response.status(400).send({ message: "The password is invalid" });
            }
        });
        response.send({ message: "The username and password combination is correct!" });
    } catch (error) {
        response.status(500).send(error);
    }
    next();
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
    next();
})




module.exports = router;
