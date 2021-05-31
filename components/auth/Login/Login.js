/* eslint-disable no-console */
import React, { useState } from 'react';
import {
    View, TextInput, Text, TouchableOpacity,
} from 'react-native';
import firebase from 'firebase/app';
import styles from './style';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setEmailOfUser = (userName) => setEmail(userName);
    const setPasswordOfUser = (userPassword) => setPassword(userPassword);

    const onSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <View style={styles.bg}>
            <TextInput style={styles.input}
                placeholder="Email"
                onChangeText={
                    setEmailOfUser
                }
            />
            <TextInput style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={
                    setPasswordOfUser
                }
            />
            <TouchableOpacity style={styles.button}
                onPress={
                    () => onSignIn()
                }
                title="Login"
            >
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
