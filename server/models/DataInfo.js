const {mongoose} = require('mongoose');

const DataSchema = new mongoose.Schema({
    table: String,
    action: String,
    data: [Object]
})

const DataModel = mongoose.model('devtesting', DataSchema, 'devtesting');
module.exports = DataModel;