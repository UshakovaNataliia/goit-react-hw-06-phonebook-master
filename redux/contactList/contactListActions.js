import {createAction} from '@reduxjs/toolkit';
import shortId from 'shortid';

export const addContactItem = createAction('contact/add', contact => ({
    payload: {
        contact: {
            id: shortId.generate(),
            name: contact.name,
            number: contact.number,
        },
    },
}));

export const deleteContact = createAction('contact/delete');

export const setContacts = createAction('contact/set'); 