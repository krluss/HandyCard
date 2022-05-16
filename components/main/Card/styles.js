import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        backgroundColor: '#fff',
        marginVertical: 7,
        padding: 30,
        justifyContent: 'space-between',
        width: windowWidth - 50,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
