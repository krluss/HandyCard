/* eslint-disable no-console */
import firebase from 'firebase';
import { USER_STATE_CHANGE, USER_CARDS_STATE_CHANGE, SET_USER_CARD_NUMBER } from '../constants/index';

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
                } else {
                    console.log('does not exist');
                }
            });
    });
}

export function fetchUserCards() {
    return ((dispatch) => {
        firebase.firestore()
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
                dispatch({ type: USER_CARDS_STATE_CHANGE, cards });
            });
    });
}

export const setCardNumber = (cardNumber) => ({
    type: SET_USER_CARD_NUMBER, cardNumber,
});
