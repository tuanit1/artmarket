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

import ArtContainer from '../containers/ArtContainter';

export default class MainScreen extends Component {
    render() {
        return (
            <ArtContainer navigation={this.props.navigation}></ArtContainer>
        );
    }
}