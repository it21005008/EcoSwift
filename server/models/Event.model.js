const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventSchema = new Schema({

    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
    binSize: {
        type: String,
        required: true
    },
    pickupTime: {
        type: String,
        required: true
    },
    pickupDate: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;