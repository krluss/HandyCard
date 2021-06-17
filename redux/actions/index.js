/* eslint-disable no-console */
import firebase from 'firebase';
import {
    CHANGE_USER_STATE,
    CHANGE_USER_CARDS_STATE,
    SET_USER_CARD_NUMBER,
} from '../constants';

export function fetchUser() {
    return (dispatch) => {
        firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispatch({
                        type: CHANGE_USER_STATE,
                        currentUser: snapshot.data(),
                    });
                } else {
                    console.error('does not exist');
                }
            });
    };
}

export function fetchUserCards() {
    return (dispatch) => {
        firebase
            .firestore()
            .collection('cards')
            .doc(firebase.auth().currentUser.uid)
            .collection('userCards')
            .orderBy('brandName', 'asc')
            .get()
            .then((snapshot) => {
                const cards = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    const { id } = doc;
                    return { id, ...data };
                });
                dispatch({ type: CHANGE_USER_CARDS_STATE, cards });
            });
    };
}

export const setCardNumber = (cardNumber) => ({
    type: SET_USER_CARD_NUMBER, cardNumber,
});
