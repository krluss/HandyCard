/* eslint-disable no-console */
import React, { useState } from 'react';
import {
    View, TextInput, TouchableOpacity, Text,
} from 'react-native';

import firebase from 'firebase';
import 'firebase/firestore';
import styles from './style';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setNameOfUser = (userName) => setName(userName);
    const setEmailOfUser = (userEmail) => setEmail(userEmail);
    const setPasswordOfUser = (userPassword) => setPassword(userPassword);

    const onSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection('users')
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email,
                    });
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View style={styles.bg}>
            <TextInput style={styles.input}
                placeholder="Name"
                onChangeText={
                    setNameOfUser
                }

            />
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
                    () => onSignUp()
                }
                title="Register"
                color='#F9AA33'

            >
                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;
