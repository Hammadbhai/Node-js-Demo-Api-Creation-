const mongoose = require('mongoose');

const todomodel = mongoose.Schema({
    todoname:{type:String},
})

const todoSchema = mongoose.model('todo',todomodel)
module.exports = todoSchema