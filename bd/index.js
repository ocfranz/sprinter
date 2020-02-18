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

// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('');
}); 
    
mongoose.connection.on('error',function (err) { 
    console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose default connection disconnected'); 
});
  
process.on('SIGINT', function() {   
    mongoose.connection.close(function () { 
        console.log('Mongoose default connection disconnected through app termination'); 
        process.exit(0); 
    }); 
});