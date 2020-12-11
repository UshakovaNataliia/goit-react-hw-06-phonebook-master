import { addContactItem, deleteContact, setContacts} from './contactListActions';
import {createReducer} from '@reduxjs/toolkit';

export const contacts = createReducer([], {
    [addContactItem]: (state, action) => [...state, action.payload.contact],
    [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
    [setContacts]: (state, action) => [...state, ...action.payload],
});