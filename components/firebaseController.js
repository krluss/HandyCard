/* eslint-disable no-console */
import firebase from 'firebase';
import 'firebase/firestore';

require('firebase/firestore');

export const onLogout = () => {
    firebase.auth().signOut();
};

export const saveCardData = (brandName, cardNumber, props) => {
    firebase
        .firestore()
        .collection('cards')
        .doc(firebase.auth().currentUser.uid)
        .collection('userCards')
        .add({
            brandName,
            cardNumber,
        })
        .then(() => {
            props.navigation.popToTop();
        });
};

export const deleteCard = (id) => {
    firebase
        .firestore()
        .collection('cards')
        .doc(firebase.auth().currentUser.uid)
        .collection('userCards')
        .doc(id)
        .delete();
};

export const signIn = (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
            console.error(error);
        });
};

export const signUp = (email, password, name) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase
                .firestore()
                .collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    name,
                    email,
                });
        })
        .catch((error) => {
            console.error(error);
        });
};
