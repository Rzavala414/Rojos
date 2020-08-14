const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventData:{
        type: String,
        required: true,
        trim: true
    },
    eventInfo:{
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