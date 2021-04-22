import { USER_STATE_CHANGE, USER_CARDS_STATE_CHANGE, SET_USER_CARD_NUMBER } from "../constants"

const initialState = {
    currentUser: null,
    cards: [],
    cardNumber: ''
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_CARDS_STATE_CHANGE:
            return {
                ...state,
                cards: action.cards
            }
        case SET_USER_CARD_NUMBER:
            return{
                ...state,
                cardNumber: action.cardNumber
            }
        default:
            return state
    }

}