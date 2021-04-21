import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        marginHorizontal:24,
        marginVertical:7,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})