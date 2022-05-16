import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#344955',
        color: '#F9AA33',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item: {
        fontSize: 32,
    },
    noCardText: {
        color: '#F9AA33',
        fontSize: 30,
        fontWeight: 'bold',
        width: windowWidth - 50,
        textAlign: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: '#F9AA33',
        width: windowWidth - 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 6,
    },
    text: {
        color: '#344955',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;
