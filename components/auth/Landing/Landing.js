import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import routeNames from '../../../utils/routeNamesEnum';

const Landing = ({ navigation }) => (
    <View style={styles.bg}>
        <Text style={styles.welcomeText}>Welcome to HandyCard</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routeNames.registration)}
        >
            <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routeNames.login)}
        >
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
    </View>
);

export default Landing;
