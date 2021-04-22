import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, fetchUserCards } from '../redux/actions/index'

import CardsScreen from './main/Cards'
import SettingsScreen from './main/Settings'

const Tab = createBottomTabNavigator()

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser()
        this.props.fetchUserCards()
    }
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#F9AA33',
                    activeBackgroundColor: '#232F34',
                    inactiveBackgroundColor: '#232F34',
                }}
            >
                <Tab.Screen
                    name="Cards"
                    component={CardsScreen}
                    options={{
                        tabBarLabel: 'Cards',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="credit-card" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>

        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchUserCards }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)
