const mongoose = require('mongoose');

const authSchema = mongoose.Schema({

    email:{type:String},
    password:{type:String}
})

const authmodel = mongoose.model('authdata',authSchema)
module.exports = authmodel