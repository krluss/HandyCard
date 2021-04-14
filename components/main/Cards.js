import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Cards() {
    return (
        <View style={styles.bg}>
            <Text style={styles.text}> Karty </Text>
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
    }
})
