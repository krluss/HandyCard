import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#344955',
    },
    inputIOS: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#F9AA33',
        borderRadius: 4,
        width: windowWidth - 50,
        left: 25,
        color: '#c6c6d0',
    },
    inputAndroid: {
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#F9AA33',
        borderRadius: 8,
        width: windowWidth - 50,
        left: 25,
        color: '#c6c6d0',
    },
    input: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        width: windowWidth - 50,
        color: '#c6c6d0',
        borderColor: '#F9AA33',
        backgroundColor: '#344955',
        borderRadius: 4,
    },
    btn: {
        backgroundColor: '#F9AA33',
        width: windowWidth - 50,
        height: 40,
        alignItems: 'center',
        marginBottom: 180,
        justifyContent: 'center',
        borderRadius: 6,
    },
    btnText: {
        color: '#344955',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;
