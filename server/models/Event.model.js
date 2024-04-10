const mongoose = require("mongoose");
const { Schema } = mongoose;


const eventSchema = new Schema({
    fullName: String,
    address: String,
    email: String,
    serviceType: String,
    binSize: String,
    pickupTime: String,
    pickupDate: String,



});

module.exports = Event = mongoose.model("Event", eventSchema);