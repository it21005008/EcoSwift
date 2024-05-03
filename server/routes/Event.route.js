const express = require("express");
const router = express.Router();

const {
    addEvent,
    getEvents,

} = require("../controllers/Event.controller");



//REST API for Events
//call relevant controller function according to the request type

router.get("/", getEvents);

// router.get("/:id", getEvent);

router.post("/add", addEvent);

// router.put("/:id", updateEvent);

// router.delete("/:id", removeEvent);

module.exports = router;