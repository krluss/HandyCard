import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

import AuthContainer from './components/auth/authContainer';
import MainCointainer from './components/main/mainContainer';
import Loading from './components/loading/Loading';

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
            } else {
                setLogged(true);
            }
            setLoaded(true);
        });
    }, []);

    if (!isLoaded) {
        return <Loading />;
    }

    if (!isLogged) {
        return <AuthContainer />;
    }

    return <MainCointainer />;
};

export default App;
