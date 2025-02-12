const mongoose = require('mongoose');
const flashcardSchema = require('./Flashcard');

const { Schema } = mongoose;

const deckSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    class:  {
        type: String,
        required: true
    },
    flashcardList: [flashcardSchema],
    public: {
        type: Boolean
    }

});

Deck = mongoose.model('Deck', deckSchema);
module.exports = {Deck, deckSchema}