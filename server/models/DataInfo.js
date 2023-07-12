const {mongoose} = require('mongoose');

const DataSchema = new mongoose.Schema({
    table: String
})

const DataModel = mongoose.model('devtesting', DataSchema);
module.exports = DataModel;