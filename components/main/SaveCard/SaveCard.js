import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCards } from '../../../redux/actions';
import styles from './styles';
import { saveCardData } from '../../firebaseController';

const SaveCard = (props) => {
    const [brandName, setBrandName] = useState('');
    const dispatch = useDispatch();
    const cardNumber = useSelector((state) => state.userState.cardNumber);
    const setNameOfBrand = (cardName) => setBrandName(cardName);

    const saveCardHandler = () => {
        saveCardData(brandName, cardNumber, props);
        dispatch(fetchUserCards());
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Brand"
                onChangeText={setNameOfBrand}
            />
            <TextInput
                style={styles.input}
                placeholder="Card Number"
                value={cardNumber}
                keyboardType="numeric"
            />
            <Button title="Save Card" onPress={saveCardHandler} />
        </View>
    );
};

export default SaveCard;
