const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventDate:{
        type: String,
        required: true,
        trim: true
    },
    body:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Events = mongoose.model('events', EventSchema);

module.exports = Events;