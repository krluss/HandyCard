import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
        <View>
            <RNPickerSelect
                onValueChange={setNameOfBrand}
                placeholder={{ label: 'Wybierz sklep', value: null }}
                items={brandNameArray}
            />
            <TextInput
                style={styles.input}
                value={cardNumber}
                editable={false}
            />
            <Button title="Save Card" onPress={saveCardHandler} />
        </View>
    );
};

export default SaveCard;
