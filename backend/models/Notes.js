const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    tag : {
        type: String,
        deafult: 'General'
    },
    date : {
        type: Date,
        deafult: Date.now
    },
});

module.exports = mongoose.model('user', NotesSchema);