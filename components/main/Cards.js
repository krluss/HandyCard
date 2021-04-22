import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import Card from './Card'
import { connect } from 'react-redux'

function Cards(props) {
    const { cards } = props
    return (
        <View style={styles.bg}>
            <FlatList
                data={cards}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('CardDetails', item)}>
                        <Card>
                            <Text>{item.brandName}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <Button
                title='Add card'
                onPress={() => props.navigation.navigate('AddCard')}
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

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    cards: store.userState.cards
})

export default connect(mapStateToProps, null)(Cards)
