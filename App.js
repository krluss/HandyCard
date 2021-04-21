import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyATjMtEaCnZH4enT7600FFcFaQ8f09lfqs",
  authDomain: "handycard-599ca.firebaseapp.com",
  projectId: "handycard-599ca",
  storageBucket: "handycard-599ca.appspot.com",
  messagingSenderId: "576436419684",
  appId: "1:576436419684:web:511169d9a3c84f253f7371"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import CardDetails from './components/main/CardDetails'


const Stack = createStackNavigator();


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#344955' }}>
          <Text style={{ color: '#F9AA33', fontSize: 25 }}>Loading</Text>
        </View>
      )
    }


    if (!loggedIn) {
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
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App


