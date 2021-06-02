import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, Button,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';
import { setCardNumber } from '../../../redux/actions/index';
import styles from './styles';

const AddCard = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        dispatch(setCardNumber(data));
    };

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.scannerContainer}>

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Next'} onPress={() => navigation.navigate('SaveCard')} />}
            {!scanned && <Text style={styles.text}>Scan your card number</Text>}

        </View>
    );
};

export default AddCard;
