import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

import AuthContainer from './components/auth/authContainer';
import MainCointainer from './components/main/mainContainer';

import firebaseConfig from './config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const App = () => {
    const [isLoaded, setLoaded] = useState(false);
    const [isLogged, setLogged] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                setLogged(false);
                setLoaded(true);
            } else {
                setLogged(true);
                setLoaded(true);
            }
        });
    }, []);

    if (!isLoaded) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#344955',
                }}
            >
                <Text style={{ color: '#F9AA33', fontSize: 25 }}>Loading</Text>
            </View>
        );
    }

    if (!isLogged) {
        return AuthContainer();
    }

    return MainCointainer();
};

export default App;
