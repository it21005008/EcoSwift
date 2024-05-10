// const Contact = require("../models/Contact.model");

// //Add a new contact
// const addContact = (req, res) => {
//     const {
//         firstName,
//         lastName,
//         email,
//         mobile,
//         message,
//     } = req.body;

//     const contact = new Contact({
//         firstName,
//         lastName,
//         email,
//         mobile,
//         message,
//     });

//     contact
//         .save()
//         .then((createdContact) => {
//             res.json(createdContact);
//         })
//         .catch((error) => {
//             res.status(400).json(error);
//         });
// };


// //get contact details
// const getContacts = async(req, res) => {
//     try {
//         const contacts = await Contacts.find();
//         res.json(contacts);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// };

// //get a specific contact details
// const getContact = async(req, res) => {
//     const contactId = req.params.id;

//     try {
//         const contact = await Contact.findById(contactId);
//         res.json(contact);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// };


// //update relevant contact details
// const updateContact = async(req, res) => {
//     const contactId = req.params.id;

//     try {
//         const contact = await Contact.findById(contactId);

//         if (!contact) {
//             return res.status(404).json("There is no contact to update");
//         }

//         const {
//             firstname,
//             lastname,
//             email,
//             mobile,
//             discription,
//         } = req.body;

//         const updatedContact = await Contact.findByIdAndUpdate(contactId, {
//             firstname,
//             lastname,
//             email,
//             mobile,
//             discription,
//         });

//         res.status(200).json(updatedContact);
//     } catch (error) {
//         res.status(400).json(error.message);
//     }
// };

// //remove unnesessary contacts
// const removeContact = async(req, res) => {
//     const contactId = req.params.id;

//     try {
//         const contact = await Contact.findById(contactId);


//         if (!contact) {
//             return res.status(404).json("There is no contact to remove");
//         }

//         const removedContact = await Contact.findByIdAndDelete(contactId);
//         res.status(200).json(removedContact);
//     } catch (error) {
//         res.status(400).json(error.message);
//     }
// };

// module.exports = {
//     addContact,
//     getContacts,
//     getContact,
//     updateContact,
//     removeContact,
// };