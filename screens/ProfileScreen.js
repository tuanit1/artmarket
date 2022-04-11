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

import MyProfileContainer from '../containers/MyProfileContainer'

export default class ProfileScreen extends Component {
    render() {
        return (
            <MyProfileContainer navigation={this.props.navigation}></MyProfileContainer>
        );
    }
}

