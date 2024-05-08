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
        .catch((err) => res.json(err));
};

// get a specific event details
const getEvent = (req, res) => {
    Event.findById(req.params.id)
        .then((Event) => res.status(200).json(Event))
        .catch((err) => {
            res.status(400).json({ message: err });
        });
};

//update relevant event details
const updateEvent = (req, res) => {
    Event.findById(req.params.id)
        .then((Event) => {
            Event.fullName = req.body.fullName;
            Event.serviceType = req.body.serviceType;
            Event.binSize = req.body.binSize;
            Event.pickupTime = req.body.pickupTime;
            Event.pickupDate = req.body.pickupDate;

            Event.save()
                .then(() => res.status(200).json("Event updated"))
                .catch((err) => res.status(400).json({ Error: err }));
        })

    .catch((err) => res.status(400).json({ Erro: err }));
};

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
const deleteEvent = (req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("Event deleted"))
        .catch((err) => res.status(400).json({ Error: err }));
};

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
    getEvent,
    updateEvent,
    deleteEvent,
};