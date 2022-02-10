import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#344955',
        paddingTop: 23,
    },
    picker: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },
    input: {
        margin: 10,
        height: 40,
        width: '95%',
        backgroundColor: 'white',
        paddingLeft: 6,
        fontSize: 16,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#F9AA33',
        width: 288,
        height: 40,
        alignItems: 'center',
        marginBottom: 180,
        justifyContent: 'center',
        borderRadius: 6,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;
