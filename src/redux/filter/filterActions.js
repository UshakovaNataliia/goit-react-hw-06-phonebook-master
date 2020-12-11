import { FILTER_CONTACT } from './filterActionsTypes';

export const filterInput = filter => ({
    type: FILTER_CONTACT,
    payload: {
        filter,
    }
});