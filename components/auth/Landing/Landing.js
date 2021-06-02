import React from 'react';
import { View, Button } from 'react-native';
import styles from './style';

const Landing = ({ navigation }) => (
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

export default Landing;
