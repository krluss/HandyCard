import React, { useState } from 'react';
import {
    View, TextInput, Button,
} from 'react-native';
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCards } from '../../../redux/actions/index';
import styles from './styles';

require('firebase/firestore');

const SaveCard = (props) => {
    const [brandName, setBrandName] = useState('');
    const dispatch = useDispatch();
    const cardNumber = useSelector((state) => state.userState.cardNumber);
    const setNumberOfCard = () => (cardNumber);
    const setNameOfBrand = (cardName) => setBrandName(cardName);

    const saveCardData = () => {
        firebase.firestore()
            .collection('cards')
            .doc(firebase.auth().currentUser.uid)
            .collection('userCards')
            .add({
                brandName,
                cardNumber,
            })
            .then((() => {
                props.navigation.popToTop();
                setNumberOfCard('');
            }));
    };

    return (
        <View>
            <TextInput style={styles.input}
                placeholder='Brand'
                onChangeText={
                    setNameOfBrand
                }
            />
            <TextInput style={styles.input}
                placeholder='Card Number'
                onChangeText={
                    setNumberOfCard
                }
                value={cardNumber}
                keyboardType='numeric'
            />
            <Button
                title='Save Card'
                onPress={() => {
                    saveCardData();
                    dispatch(fetchUserCards());
                }}
            />
        </View>
    );
};

export default SaveCard;
