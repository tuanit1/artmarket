import * as React from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import auth from '@react-native-firebase/auth';

import MainScreen from './MainScreen'
import ProfileScreen from './ProfileScreen'
import DetailScreen from './DetailScreen'

function CustomDrawerContent(props, parent) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Sign out"
                onPress={() => {
                    auth()
                        .signOut()
                        .then(() => {
                            ToastAndroid.show('Sign out!', ToastAndroid.SHORT);
                            parent.navigation.goBack();
                        });
                }}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
            />

            <Stack.Screen
                name="DetailScreen"
                component={DetailScreen}
            />

        </Stack.Navigator>
    );
}

export default function DrawerView(sprops) {

    return (
        <Drawer.Navigator
            drawerContent={(props) => CustomDrawerContent(props, sprops)}
        >
            <Drawer.Screen name="MainScreen" component={MainStack} options={{ title: 'Art Market' }} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Your profile' }} />
        </Drawer.Navigator>
    );
}