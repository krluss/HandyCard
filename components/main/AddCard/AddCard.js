import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import { useDispatch } from 'react-redux';
import { setCardNumber } from '../../../redux/actions';
import styles from './styles';
import routeNames from '../../../utils/routeNamesEnum';

const AddCard = ({ navigation }) => {
    const [cameraHasPermission, setCameraHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setCameraHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        dispatch(setCardNumber(data));
    };
    const handleButtonClick = () => {
        dispatch(setCardNumber(''));
        navigation.navigate(routeNames.saveCard);
    };
    if (!cameraHasPermission) {
        return (
            <View style={styles.container}>
                <Text style={styles.noPermissionText}>No access to camera</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={ handleButtonClick }
                >
                    <Text style={styles.btnText}>Put number manualy</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.scannerContainer}>
                <Camera
                    style={styles.camera}
                    type={Camera.Constants.Type.back}
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }/>
            </View>
            {scanned
                ? navigation.push(routeNames.saveCard)
                : (
                    <View>
                        <Text style={styles.noScanText} >SCAN YOUR CARD</Text>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={ handleButtonClick }
                        >
                            <Text style={styles.btnText}>Put number manualy</Text>
                        </TouchableOpacity>
                    </View>
                )}
        </View>
    );
};

export default AddCard;
