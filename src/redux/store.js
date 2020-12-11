import { createStore, combineReducers } from 'redux';
import {contacts} from './contactList/contactListReducer';
import {filter} from './filter/filterReducer'

const contactsReducer = combineReducers({
        contacts,
        filter,
});
const rootReducer = combineReducers({
    contactsReducer: contactsReducer
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;