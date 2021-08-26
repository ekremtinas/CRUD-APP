
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
    },
    bookPrice: {
        type: Number,
    },
    bookAuthor: {
        type: String
    },

});

const Book =  mongoose.model("Book", BookSchema);

module.exports = Book; 