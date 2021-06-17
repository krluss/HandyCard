import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import { useDispatch } from 'react-redux';
import { setCardNumber } from '../../../redux/actions';
import styles from './styles';
import routeNames from '../../../utils/routeNamesEnum';

const AddCard = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        dispatch(setCardNumber(data));
    };

    if (!hasPermission) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.scannerContainer}>
                <Camera
                    style={styles.camera}
                    type={Camera.Constants.Type.back}
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }

                />
            </View>
            {scanned ? (
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate(routeNames.saveCard)}
                >
                    <Text style={styles.btnText}>NEXT</Text>
                </TouchableOpacity>)
                : (<Text style={styles.noScanText}>SCAN YOUR CARD</Text>)}
        </View>
    );
};

export default AddCard;
