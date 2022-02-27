import * as React from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import auth from '@react-native-firebase/auth';

import MainScreen from './MainScreen'
import ProfileScreen from './ProfileScreen'

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

export default function DrawerView(sprops) {
    return (
        <Drawer.Navigator
            drawerContent={(props) => CustomDrawerContent(props, sprops)}
        >
            <Drawer.Screen name="MainScreen" component={MainScreen} options={{ title: 'Art Market' }} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Your profile' }} />
        </Drawer.Navigator>
    );
}