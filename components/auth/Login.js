import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import firebase from 'firebase/app'


export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',

        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.bg}>
                <TextInput style={styles.input}
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity style={styles.button}
                    onPress={() => this.onSignUp()}
                    title="Login"
                >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login


const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#344955',
        paddingTop: 23,
        alignItems: 'center'
    },
    input: {
        margin: 10,
        height: 40,
        width: 288,
        backgroundColor: 'white',
        paddingLeft: 6,

    },
    button: {
        backgroundColor: '#F9AA33',
        width: 288,
        height: 40,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
    }
})