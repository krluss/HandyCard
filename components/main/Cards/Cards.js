/* eslint-disable no-nested-ternary */
/* pokombinowac z nested-ternary */
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import styles from './styles';
import routeNames from '../../../utils/routeNamesEnum';

const Cards = (props) => {
    const cards = useSelector((state) => state.userState.cards);
    const user = useSelector((state) => state.userState.currentUser);

    return (
        <View style={styles.bg}>
            {user !== null
                ? cards.length !== 0 ? (<FlatList
                    data={cards}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate(routeNames.cardDetails, item)}
                        >
                            <Card>
                                <Text style={styles.item}>{item.brandName}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />)
                    : (<Text style={styles.noCardText}>
                        Hello {user.name}! {'\n'}
                        Add a card using button down there{'\n'}
                        |{'\n'}
                        |{'\n'}
                        |{'\n'}
                        |{'\n'}
                        V
                    </Text>) : <Text> </Text>}

            <TouchableOpacity
                onPress={() => props.navigation.navigate(routeNames.addCard)}
                style={styles.button}
            >
                <Text style={styles.text}>Add card</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Cards;
