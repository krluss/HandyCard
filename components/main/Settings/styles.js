import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#344955',
        color: '#F9AA33',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        color: '#344955',
        fontSize: 20,
        fontWeight: 'bold',
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
});

export default styles;
