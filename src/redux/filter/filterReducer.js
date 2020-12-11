import {FILTER_CONTACT} from './filterActionsTypes';

export const filter = (state = '', {type, payload}) => {
    switch (type) {
        case FILTER_CONTACT:
            return payload.filter;
        default:
            return state;
    }
};