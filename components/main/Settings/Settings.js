import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { onLogout } from '../../firebaseController';
import styleConst from '../../../utils/styleConst';

const Settings = () => (
    <View style={styles.bg}>
        <Text style={styles.text}> Ustawienia </Text>
        <View style={styles.button}>
            <Button title="Logout" onPress={onLogout} color={styleConst.tintColor} />
        </View>
    </View>
);

export default Settings;
