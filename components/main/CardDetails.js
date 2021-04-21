import React from 'react'
import { View, Text } from 'react-native'
import Barcode from 'react-native-barcode-svg'



export default function CardDetails({ route }) {
    const { brand, barcode } = route.params
    return (
        <View>
            <Text>{brand}</Text>
            <Barcode
            value={barcode}
            />
            <Text>{barcode}</Text>
        </View>
    )
}
