import React from 'react';
import { View, Button } from 'react-native';
import styles from './style';

export default function Landing({ navigation }) {
    return (
        <View style={styles.bg}>
            <Button
                title="Register"
                onPress={() => navigation.navigate('Registration')}
                color='#F9AA33' />
            <View style={styles.hr}>
            </View>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
                color='#F9AA33' />
        </View>
    );
}
