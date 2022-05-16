import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCards, setCardNumber } from '../../../redux/actions';
import { saveCardData } from '../../firebaseController';
import brandNameArray from '../../../utils/brandNameArray';
import styles from './styles';

const SaveCard = (props) => {
    const [brandName, setBrandName] = useState('');
    const dispatch = useDispatch();
    const cardNumber = useSelector((state) => state.userState.cardNumber);
    const setNameOfBrand = (cardName) => setBrandName(cardName);

    const saveCardHandler = () => {
        saveCardData(brandName, cardNumber, props);
        dispatch(fetchUserCards());
    };

    const placeHolder = {
        label: 'Select Shop',
        value: '',
    };

    return (
        <View style={styles.container}>
            <RNPickerSelect
                placeholder={placeHolder}
                placeholderTextColor={'#c6c6d0'}
                items={brandNameArray}
                onValueChange={setNameOfBrand}
                style={styles}
            />
            <TextInput
                style={styles.input}
                value={cardNumber}
                onChangeText={ (val) => dispatch(setCardNumber(val))}
                keyboardType={'number-pad'}
                placeholder={'Card number'}
                placeholderTextColor={'#c6c6d0'}
            />
            {brandName !== '' && cardNumber.length === 13
                ? (
                    <TouchableOpacity onPress={saveCardHandler} style={styles.btn}>
                        <Text style={styles.btnText}>Save Card</Text>
                    </TouchableOpacity>
                )
                : (<Text></Text>) }
        </View>
    );
};

export default SaveCard;
