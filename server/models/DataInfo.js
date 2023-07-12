const {mongoose} = require('mongoose');

const DataSchema = new mongoose.Schema({
    table: String,
    action: String,
    data: [Object]
})

const DataModel = mongoose.model('devtest', DataSchema, 'devtest');
module.exports = DataModel;