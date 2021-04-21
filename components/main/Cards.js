import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import Card from './Card'

export default function Cards({ navigation }) {

    const [card, setCard] = useState([
        { brand: 'Biedronka', barcode: '1231231235412', key: '1' },
        { brand: 'CCC', barcode: '1231231235412', key: '2' },
        { brand: 'Rossmann', barcode: '1231231235412', key: '3' },
    ])

    return (
        <View style={styles.bg}>
            <FlatList
                data={card}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('CardDetails', item)}>
                        <Card>
                            <Text>{item.brand}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <Button
                title='Add card'
            />
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
    item: {
        padding: 25,
        backgroundColor: 'red',
        alignItems: 'center',
    }
})
