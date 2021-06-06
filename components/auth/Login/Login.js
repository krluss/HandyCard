import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { signIn } from '../../firebaseController';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setEmailOfUser = (userName) => setEmail(userName);
    const setPasswordOfUser = (userPassword) => setPassword(userPassword);

    const signInController = () => {
        signIn(email, password);
    };
    return (
        <View style={styles.bg}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmailOfUser}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPasswordOfUser}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={signInController}
                title="Login"
            >
                <Text
                    style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}
                >
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
