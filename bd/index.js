const mongoose = require('mongoose');
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
