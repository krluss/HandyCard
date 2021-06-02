import React from 'react';
import {
    View, Text, Button, Alert,
} from 'react-native';
import firebase from 'firebase';
import Barcode from 'react-native-barcode-svg';
import { useDispatch } from 'react-redux';
import { fetchUserCards } from '../../../redux/actions/index';

import styles from './styles';

require('firebase/firestore');

const CardDetails = (props) => {
    const { brandName, cardNumber, id } = props.route.params;

    const dispatch = useDispatch();

    const deleteCard = () => {
        firebase.firestore()
            .collection('cards')
            .doc(firebase.auth().currentUser.uid)
            .collection('userCards')
            .doc(id)
            .delete()
            .then(() => {
                dispatch(fetchUserCards());
            });
    };

    const createAlert = () => {
        Alert.alert(
            '',
            'Are you sure you want to remove this card?',
            [
                {
                    text: 'Cancel',
                    onPress: () => (''),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        deleteCard();
                        props.navigation.popToTop();
                    },
                },
            ],
        );
    };

    return (
        <View style={styles.bg}>
            <Text>{brandName}</Text>
            <Barcode
                value={cardNumber}
            />
            <Text>{cardNumber}</Text>
            <Button
                title='Delete Card'
                onPress={() => {
                    createAlert();
                }}
            />
        </View>
    );
};

export default CardDetails;
