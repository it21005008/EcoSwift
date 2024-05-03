const Event = require("../models/Event.model");

//Add a new event
const addEvent = (req, res) => {
    const {
        fullName,
        address,
        email,
        serviceType,
        binSize,
        pickupTime,
        pickupDate,
    } = req.body;

    const event = new Event({
        fullName,
        address,
        email,
        serviceType,
        binSize,
        pickupTime,
        pickupDate,
    });

    event
        .save()
        .then(() => {
            res.json("Event Added");
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};


//get events details
const getEvents = (req, res) => {
    Event.find()
        .then((Event) => res.json(Event))
        .catch((err) => res.json(err))
};


//get a specific event details
// const getEvent = async(req, res) => {
//     const productId = req.params.id;

//     try {
//         const event = await Event.findById(eventId);
//         res.json(event);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// };


//update relevant event details
// const updateEvent = async(req, res) => {
//     const eventId = req.params.id;

//     try {
//         const event = await Event.findById(eventId);

//         if (!event) {
//             return res.status(404).json("There is no event to update");
//         }

//         const {
//             name,
//             address,
//             mobile,
//             email,
//             service,
//             bin,
//             date,
//             time,
//         } = req.body;

//         const updatedEvent = await Event.findByIdAndUpdate(eventId, {
//             name,
//             address,
//             mobile,
//             email,
//             service,
//             bin,
//             date,
//             time,
//         });

//         res.status(200).json(updatedEvent);
//     } catch (error) {
//         res.status(400).json(error.message);
//     }
// };

//remove unnesessary events
// const removeEvent = async(req, res) => {
//     const eventId = req.params.id;

//     try {
//         const event = await Event.findById(eventId);

//         if (!event) {
//             return res.status(404).json("There is no event to remove");
//         }

//         const removedEvent = await Event.findByIdAndDelete(eventId);
//         res.status(200).json(removedEvent);
//     } catch (error) {
//         res.status(400).json(error.message);
//     }
// };

module.exports = {
    addEvent,
    getEvents,

};