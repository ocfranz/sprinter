const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    username : {
        type : String, 
        required: true,
        unique: true
    },
    email : {
        type : String,
        require : true,
        unique: true
    },
    password : {
        type : String,
        require : true
    },
    name : {
        type : String, 
        required: true,
    }
})

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next(); 
});

module.exports = mongoose.model('Users', UserSchema);