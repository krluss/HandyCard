/* eslint-disable import/prefer-default-export */
import { CHANGE_USER_STATE, CHANGE_USER_CARDS_STATE, SET_USER_CARD_NUMBER } from '../constants';

const initialState = {
    currentUser: null,
    cards: [],
    cardNumber: '',
};

export const user = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_USER_STATE:
        return {
            ...state,
            currentUser: action.currentUser,
        };
    case CHANGE_USER_CARDS_STATE:
        return {
            ...state,
            cards: action.cards,
        };
    case SET_USER_CARD_NUMBER:
        return {
            ...state,
            cardNumber: action.cardNumber,
        };
    default:
        return state;
    }
};
