import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

import LandingScreen from './components/auth/Landing/Landing';
import RegisterScreen from './components/auth/Register/Register';
import LoginScreen from './components/auth/Login/Login';
import MainScreen from './components/Main';
import CardDetails from './components/main/CardDetails/CardDetails';
import AddCard from './components/main/AddCard/AddCard';
import SaveCard from './components/main/SaveCard/SaveCard';

const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
    apiKey: 'AIzaSyATjMtEaCnZH4enT7600FFcFaQ8f09lfqs',
    authDomain: 'handycard-599ca.firebaseapp.com',
    projectId: 'handycard-599ca',
    storageBucket: 'handycard-599ca.appspot.com',
    messagingSenderId: '576436419684',
    appId: '1:576436419684:web:511169d9a3c84f253f7371',
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
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
    });
    if (!isLoaded) {
        return (
            <View style={
                {
                    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#344955',
                }}>
                <Text style={{ color: '#F9AA33', fontSize: 25 }}>Loading</Text>
            </View>
        );
    }

    if (!isLogged) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HandyCard">
                    <Stack.Screen name="HandyCard" component={LandingScreen} options={{ headerTintColor: '#F9AA33', headerStyle: { backgroundColor: '#232F34' } }} />
                    <Stack.Screen name="Registration" component={RegisterScreen} options={{ headerTintColor: '#F9AA33', headerStyle: { backgroundColor: '#232F34' } }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerTintColor: '#F9AA33', headerStyle: { backgroundColor: '#232F34' } }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HandyCard">
                    <Stack.Screen name="HandyCard" component={MainScreen} options={{ headerTintColor: '#F9AA33', headerStyle: { backgroundColor: '#232F34' } }} />
                    <Stack.Screen name="CardDetails" component={CardDetails} options={{ headerTintColor: '#F9AA33', headerStyle: { backgroundColor: '#232F34' } }} />
                    <Stack.Screen name="AddCard" component={AddCard} options={{ headerTintColor: '#F9AA33', headerStyle: { backgroundColor: '#232F34' } }} />
                    <Stack.Screen name="SaveCard" component={SaveCard} options={{ headerTintColor: '#F9AA33', headerStyle: { backgroundColor: '#232F34' } }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
