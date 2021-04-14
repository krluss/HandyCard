import firebase from 'firebase'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Settings() {

    const onLogout = () => {
        firebase.auth().signOut();
    }

    return (
        <View style={styles.bg}>
            <Text style={styles.text}> Ustawienia </Text>
            <View style={styles.button}> 
            <Button
                title='Logout'
                onPress={() => onLogout()}
                color= '#F9AA33'
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#344955',
        color: '#F9AA33',
    },
    text: {
        color: '#F9AA33',
    },
    button: {
        flex: 2,
        justifyContent: 'flex-end',
    }
})
