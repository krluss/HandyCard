import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {  useDispatch } from 'react-redux'
import { setCardNumber } from '../../redux/actions/index'

export default function AddCard({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [card, setCard] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    
    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        dispatch(setCardNumber(data))
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
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
}

const styles = StyleSheet.create({
    scannerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 34,
        marginLeft: 40,
        width: 320,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },

});