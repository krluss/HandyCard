import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import Barcode from 'react-native-barcode-svg';
import { useDispatch } from 'react-redux';
import MapView, { Callout, Marker } from 'react-native-maps';
import { fetchUserCards } from '../../../redux/actions/index';
import { deleteCard } from '../../firebaseController';
import styles from './styles';
import * as shopMarkers from '../../../utils/brandNameMarkers.json';

const CardDetails = (props) => {
    const { brandName, cardNumber, id } = props.route.params;

    const dispatch = useDispatch();

    const delteCardHandler = () => {
        deleteCard(id);
        dispatch(fetchUserCards());
        props.navigation.popToTop();
    };

    const createAlert = () => {
        Alert.alert('', 'Are you sure you want to remove this card?', [
            {
                text: 'Cancel',
            },
            {
                text: 'Yes',
                onPress: () => {
                    delteCardHandler();
                },
            },
        ]);
    };
    return (
        <View style={styles.bg}>
            <Text style={styles.text}>{brandName}</Text>
            <View style={styles.barcodeBg}>
                <Barcode value={cardNumber} />
            </View>
            <Text style={styles.text}>{cardNumber}</Text>
            <TouchableOpacity
                onPress={createAlert}
                style={styles.button}
            >
                <Text style={styles.btnText}>Delete Card</Text>
            </TouchableOpacity>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 50.06283611555762,
                    longitude: 19.937580256336474,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: 50.06283611555762, longitude: 19.937580256336474 }}
                    pinColor={'lightblue'}
                />
                {shopMarkers.Shops.map((shop) => (
                    shop.properties.NAME === brandName ? (<Marker
                        key={shop.properties.SHOP_ID}
                        coordinate={{
                            latitude: shop.geometry.coordinates[0],
                            longitude: shop.geometry.coordinates[1],
                        }}
                    >
                        <Callout>
                            <Text>{shop.properties.NAME}</Text>
                            <Text>{shop.properties.ADDRESS}</Text>
                        </Callout>
                    </Marker>) : null
                ))}
            </MapView>
        </View>
    );
};

export default CardDetails;
