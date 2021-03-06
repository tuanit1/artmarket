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
import UpdateArtScreen from './UpdateArtScreen';
import UpdateUserScreen from './UpdateUserScreen'

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

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />

            <Stack.Screen
                name="UpdateArtScreen"
                component={UpdateArtScreen}
            />

            <Stack.Screen
                name="UpdateUserScreen"
                component={UpdateUserScreen}
            />

        </Stack.Navigator>
    );
}

export default function DrawerView(sprops) {

    return (
        <Drawer.Navigator
            drawerContent={(props) => CustomDrawerContent(props, sprops)}
        >
            <Drawer.Screen name="MainStack" component={MainStack} options={{ title: 'Art Market' }} />
            <Drawer.Screen name="ProfileScreen" component={ProfileStack} options={{ title: 'Your profile' }} />
        </Drawer.Navigator>
    );
}