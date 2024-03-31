const mongoose = require("mongoose");
const { Schema } = mongoose;


const contactSchema = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    message: String,

});

module.exports = Contact = mongoose.model("Contact", contactSchema);