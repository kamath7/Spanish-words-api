const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    englishWord: {
        type:String,
        required:true
    },
    spanishWord:{
        type:String,
        required:true
    },
    spanishSentence:{
        type:String,
        required:true
    },
    englishSentence:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Word',WordSchema)