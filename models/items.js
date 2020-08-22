var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
    item: String
});

module.exports = mongoose.model("Items", itemSchema);