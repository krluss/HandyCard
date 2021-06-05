import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './Landing/Landing';
import RegisterScreen from './Register/Register';
import LoginScreen from './Login/Login';
import routeNames from '../../routeNamesEnum';
import styleConst from '../../styleConst';

const Stack = createStackNavigator();

const authContainer = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={routeNames.handyCard}>
            <Stack.Screen name={routeNames.handyCard} component={LandingScreen}
                options={{
                    headerTintColor: styleConst.tintColor,
                    headerStyle: { backgroundColor: styleConst.bgColor },
                }} />
            <Stack.Screen name={routeNames.registration} component={RegisterScreen}
                options={{
                    headerTintColor: styleConst.tintColor,
                    headerStyle: { backgroundColor: styleConst.bgColor },
                }} />
            <Stack.Screen name={routeNames.login} component={LoginScreen}
                options={{
                    headerTintColor: styleConst.tintColor,
                    headerStyle: { backgroundColor: styleConst.bgColor },
                }} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default authContainer;
