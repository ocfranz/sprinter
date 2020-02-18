const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({
    username : {
        type : String, 
        required: true,
    },
    
})

module.exports = mongoose.model('Tasks', TaskSchema);