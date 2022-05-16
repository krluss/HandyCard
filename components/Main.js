/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch } from 'react-redux';

import { fetchUser, fetchUserCards } from '../redux/actions/index';

import CardsScreen from './main/Cards/Cards';
import SettingsScreen from './main/Settings/Settings';

const Tab = createBottomTabNavigator();

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
        dispatch(fetchUserCards());
    }, [fetchUser(), fetchUserCards()]);

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#F9AA33',
                activeBackgroundColor: '#232F34',
                inactiveBackgroundColor: '#232F34',
            }}>
            <Tab.Screen
                name="Cards"
                component={CardsScreen}
                options={{
                    tabBarLabel: 'Cards',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="credit-card"
                            color={color}
                            size={size}/>) }}/>
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="cog-outline"
                            color={color}
                            size={size}/>) }}/>
        </Tab.Navigator>
    );
};

export default Main;
