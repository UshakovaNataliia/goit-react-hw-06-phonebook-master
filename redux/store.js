import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {contacts} from './contactList/contactListReducer';
import {filter} from './filter/filterReducer'

const contactsReducer = combineReducers({
        contacts,
        filter,
});

const store = configureStore({
    reducer: {
       contactsReducer: contactsReducer
    }
})
export default store;