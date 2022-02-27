import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    ToastAndroid,
    Button,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'yellow',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}