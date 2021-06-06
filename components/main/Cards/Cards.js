import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import styles from './styles';

const Cards = (props) => {
    const cards = useSelector((state) => state.userState.cards);

    return (
        <View style={styles.bg}>
            <FlatList
                data={cards}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('CardDetails', item)}
                    >
                        <Card>
                            <Text>{item.brandName}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <Button
                title="Add card"
                onPress={() => props.navigation.navigate('AddCard')}
            />
        </View>
    );
};

export default Cards;
