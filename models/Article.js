var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    writer: {
        type: String
    }, 
    date: {
        type: String
    },
    url: {
        required: true,
        type: String,
        unique: true
    }
});

module.exports = mongoose.model("articles", ArticleSchema);
