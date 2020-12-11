import {ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS} from './contactListActionsTypes';

export const contacts = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_CONTACT:
            return [...state, payload.contact];
        case DELETE_CONTACT:
            return state.filter(contact => contact.id !== payload.contactId);
        case SET_CONTACTS:
            return [...state, ...payload.contacts];
        default:
            return state;
    }
};

