import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#344955',
    },
    scannerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        aspectRatio: 1,
    },
    btn: {
        backgroundColor: '#F9AA33',
        width: 288,
        height: 40,
        padding: 40,
        alignItems: 'center',
        marginBottom: 80,
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    noScanText: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 80,
    },
});

export default styles;
