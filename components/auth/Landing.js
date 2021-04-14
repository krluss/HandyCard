import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={styles.bg}>
            <Button 
            title="Register"
            onPress={() => navigation.navigate("Registration")}
            color= '#F9AA33'/>
            <View style={styles.hr}>
            </View>
            <Button 
            title="Login"
            onPress={() => navigation.navigate("Login")}
            color= '#F9AA33'/>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#344955',
    },
    hr: {
        margin: 2
    }
    
})
