import shortId from 'shortid';
import {ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS} from './contactListActionsTypes'

export const addContactItem = contact => ({
    type: ADD_CONTACT,
    payload: {
        alert: false,
        contact: {
            id: shortId.generate(),
            name: contact.name,
            number: contact.number,
    }},
});

export const deleteContact = contactId => ({
    type: DELETE_CONTACT,
    payload: {
        contactId,
    },
});

export const setContacts = contacts => ({
    type: SET_CONTACTS,
    payload: {
        contacts,
    },
}); 