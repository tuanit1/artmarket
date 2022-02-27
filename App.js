/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import DrawerView from './screens/DrawerView'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga';

const Stack = createNativeStackNavigator();

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>

                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ title: 'Logins' }}
                    />

                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                        options={{ title: 'Signup' }}
                    />

                    <Stack.Screen
                        name="DrawerView"
                        component={DrawerView}
                        options={{ title: 'DrawerView' }}
                    />


                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
sagaMiddleware.run(rootSaga);


export default App;