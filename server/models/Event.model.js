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

    //name: String,
    //address: String,
    //mobile: String,
    //email: String,
    //service: String,
    //bin: String,
    //date: String,
    //time: String


});

module.exports = Event = mongoose.model("Event", eventSchema);