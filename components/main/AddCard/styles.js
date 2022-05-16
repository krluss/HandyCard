import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

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
        width: windowWidth - 25,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 180,
        borderRadius: 6,
    },
    btnText: {
        color: '#344955',
        fontSize: 20,
        fontWeight: 'bold',
    },
    noScanText: {
        color: '#F9AA33',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
    },
    noPermissionText: {
        color: 'red',
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 250,
    },
});

export default styles;
