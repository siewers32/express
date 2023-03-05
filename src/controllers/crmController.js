import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body)
    newContact.save()
    .then((contact) => {
        res.json(contact);
    })
    .catch((err) => {
        res.send(err)
    })
}

export const getContacts = (req, res) => {
    Contact.find()
    .then((contact) => {
        res.json(contact);
    })
    .catch((err) => {
        res.send(err)
    })
}

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactId)
    .then((contact) => {
        res.json(contact);
    })
    .catch((err) => {
        res.send(err)
    })
}

export const updateContactWithId = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true})
    .then((contact) => {
        res.json(contact);
    })
    .catch((err) => {
        res.send(err)
    })
}

export const deleteContactWithId = (req, res) => {
    Contact.remove({ _id: req.params.contactId })
    .then((contact) => {
        res.json({ message: "contact succesfully deleted" });
    })
    .catch((err) => {
        res.send(err)
    })
}