import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#344955',
        paddingTop: 23,
        alignItems: 'center',
    },
    input: {
        margin: 10,
        height: 40,
        width: windowWidth - 50,
        backgroundColor: 'white',
        paddingLeft: 6,
        borderRadius: 6,
    },
    button: {
        backgroundColor: '#F9AA33',
        width: windowWidth - 50,
        height: 40,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 6,
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
