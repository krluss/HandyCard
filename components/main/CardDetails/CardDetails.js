import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Barcode from 'react-native-barcode-svg';
import { useDispatch } from 'react-redux';
import { fetchUserCards } from '../../../redux/actions/index';
import { deleteCard } from '../../firebaseController';

import styles from './styles';

const CardDetails = (props) => {
    const { brandName, cardNumber, id } = props.route.params;

    const dispatch = useDispatch();

    const delteCardHandler = () => {
        deleteCard(id);
        props.navigation.popToTop();
        dispatch(fetchUserCards());
    };

    const createAlert = () => {
        Alert.alert('', 'Are you sure you want to remove this card?', [
            {
                text: 'Cancel',
                onPress: () => '',
                style: 'cancel',
            },
            {
                text: 'Yes',
                onPress: () => {
                    delteCardHandler();
                },
            },
        ]);
    };

    return (
        <View style={styles.bg}>
            <Text style={styles.text}>{brandName}</Text>
            <View style={styles.barcodeBg}>
                <Barcode value={cardNumber} />
            </View>
            <Text style={styles.text}>{cardNumber}</Text>
            <Button title="Delete Card" onPress={createAlert} />
        </View>
    );
};

export default CardDetails;
