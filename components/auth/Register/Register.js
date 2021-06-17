import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import { signUp } from '../../firebaseController';
import styleConst from '../../../utils/styleConst';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setUserName = (userName) => setName(userName);
    const setUserEmail = (userEmail) => setEmail(userEmail);
    const setUserPassword = (userPassword) => setPassword(userPassword);

    const signUpController = () => {
        signUp(email, password, name);
    };

    return (
        <View style={styles.bg}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={setUserName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setUserEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setUserPassword}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={signUpController}
                title="Register"
                color={styleConst.tintColor}
            >
                <Text
                    style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}
                >
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;
