import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { onLogout } from '../../firebaseController';

const Settings = () => (
    <View style={styles.bg}>
        <View >
            <TouchableOpacity
                style={styles.button}
                onPress={onLogout}
            >
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default Settings;
