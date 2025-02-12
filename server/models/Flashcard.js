const mongoose = require('mongoose');

const {Schema} = mongoose

const flashcardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    options: [String]
})

module.exports = flashcardSchema