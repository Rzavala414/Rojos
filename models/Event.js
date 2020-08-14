const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventData:{
        type: String,
        required: false
    },
    eventInfo:{
        type: String,
        required: false
    }
});

const Events = mongoose.model('events', EventSchema);

module.exports = Events;