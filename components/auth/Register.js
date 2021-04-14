import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'



import firebase from 'firebase/app'



export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
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
                    placeholder="Name"
                    onChangeText={(name) => this.setState({ name })}
                    
                />
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
                    title="Register"
                    color='#F9AA33'
                    
                >
                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Register</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

export default Register



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
        backgroundColor:'#F9AA33',
        width: 288,
        height: 40,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
    }
})
