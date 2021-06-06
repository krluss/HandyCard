import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/reducers';

import MainScreen from '../Main';
import CardDetails from './CardDetails/CardDetails';
import AddCard from './AddCard/AddCard';
import SaveCard from './SaveCard/SaveCard';
import routeNames from '../../routeNamesEnum';
import styleConst from '../../styleConst';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

const mainCointainer = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routeNames.handyCard}>
                <Stack.Screen
                    name={routeNames.handyCard}
                    component={MainScreen}
                    options={{
                        headerTintColor: styleConst.tintColor,
                        headerStyle: { backgroundColor: styleConst.bgColor },
                    }}
                />
                <Stack.Screen
                    name={routeNames.cardDetails}
                    component={CardDetails}
                    options={{
                        headerTintColor: styleConst.tintColor,
                        headerStyle: { backgroundColor: styleConst.bgColor },
                    }}
                />
                <Stack.Screen
                    name={routeNames.addCard}
                    component={AddCard}
                    options={{
                        headerTintColor: styleConst.tintColor,
                        headerStyle: { backgroundColor: styleConst.bgColor },
                    }}
                />
                <Stack.Screen
                    name={routeNames.saveCard}
                    component={SaveCard}
                    options={{
                        headerTintColor: styleConst.tintColor,
                        headerStyle: { backgroundColor: styleConst.bgColor },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
);

export default mainCointainer;
