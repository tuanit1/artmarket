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

import ArtContainer from '../containers/artContainter';

export default class MainScreen extends Component {
    render() {
        return (
            <ArtContainer></ArtContainer>
        );
    }
}