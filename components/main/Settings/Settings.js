import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { onLogout } from '../../firebaseController';

const Settings = () => (
    <View style={styles.bg}>
        <Text style={styles.text}> Ustawienia </Text>
        <View style={styles.button}>
            <Button title="Logout" onPress={onLogout} color="#F9AA33" />
        </View>
    </View>
);

export default Settings;
