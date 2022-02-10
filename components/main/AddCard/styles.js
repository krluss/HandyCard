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
    noScanText: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 180,
    },
});

export default styles;
