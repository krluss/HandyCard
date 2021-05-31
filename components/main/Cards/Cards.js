import React from 'react';
import {
    View, Text, Button, FlatList, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from './styles';

function Cards(props) {
    const { cards } = props;
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
    );
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    cards: store.userState.cards,
});

export default connect(mapStateToProps, null)(Cards);
