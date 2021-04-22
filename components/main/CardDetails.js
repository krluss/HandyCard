import React from 'react'
import { View, Text } from 'react-native'
import Barcode from 'react-native-barcode-svg'


export default function CardDetails({ route }) {
    const { brandName, cardNumber } = route.params
    return (
        <View>
            <Text>{brandName}</Text>
            <Barcode
            value={cardNumber}
            />
            <Text>{cardNumber}</Text>
        </View>
    )
}
