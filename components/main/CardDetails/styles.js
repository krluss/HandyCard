import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#344955',
        color: '#F9AA33',
        alignItems: 'center',
    },
    text: {
        color: '#F9AA33',
        fontSize: 40,
    },
    barcodeBg: {
        alignItems: 'center',
        backgroundColor: '#fff',
        color: 'red',
        marginBottom: 15,
        marginTop: 15,
        padding: 20,
    },
    map: {
        marginTop: 15,
        flex: 1,
        width: Dimensions.get('window').width,
        height: 200,
    },
});

export default styles;
