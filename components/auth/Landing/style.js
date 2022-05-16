import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#344955',
        alignItems: 'center',
        justifyContent: 'center',
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
    welcomeText: {
        color: '#F9AA33',
        fontSize: 32,
        fontWeight: 'bold',
        bottom: 200,
    },
});

export default styles;
