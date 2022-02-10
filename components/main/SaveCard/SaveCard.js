import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCards } from '../../../redux/actions';
import styles from './styles';
import { saveCardData } from '../../firebaseController';
import brandNameArray from '../../../utils/brandNameArray';

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
        <View style={styles.container}>
            <RNPickerSelect
                onValueChange={setNameOfBrand}
                items={brandNameArray}
                style={styles.picker}
            />
            <TextInput
                style={styles.input}
                value={cardNumber}
                editable={false}
            />
            <TouchableOpacity onPress={saveCardHandler} style={styles.btn}>
                <Text style={styles.btnText}>Save Card</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SaveCard;
