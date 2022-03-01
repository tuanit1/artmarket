import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    Image,
    ToastAndroid,
    Button,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';

export default class ArtListItem extends Component {

    _getDisplayTime = (time) => {
        const d = new Date();
        const d1 = new Date(time);

        const diff = d - d1;
        const second = diff / 1000;

        var displayTime = "";

        if (second / 60 >= 1) {

            const min = second / 60;

            if (min / 60 >= 1) {
                const hour = min / 60;
                if (hour >= 1) {
                    const day = hour / 24;
                    if (day >= 1) {
                        const month = day / 30;
                        if (month >= 1) {
                            displayTime = "Post " + Math.round(month) + " months ago";
                        } else {
                            displayTime = "Post " + Math.round(day) + " days ago";
                        }
                    } else {
                        displayTime = "Post " + Math.round(hour) + " hours ago";
                    }
                } else {
                    displayTime = "Post " + Math.round(min) + " minutes ago";
                }
            } else {
                displayTime = "Just now";
            }

        } else {
            displayTime = "Just now";
        }

        return displayTime;
    }

    _openDetail() {
        this.props.navigation.navigate("DetailScreen", this.props.item);
    }


    render() {

        const { thumb, name, time, price } = this.props.item;

        mDisplayTime = this._getDisplayTime(time);

        return (
            <TouchableOpacity onPress={() => { this._openDetail() }}>
                <View
                    style={{
                        height: 270,
                        width: 170,
                        margin: 5,
                        flexDirection: 'column',
                    }}>

                    <View style={{
                        flex: 1,

                    }}>
                        <Image
                            source={{ uri: thumb }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0
                            }}
                        // PlaceholderContent={{ uri: server_url + 'image/' + 'tuan.jpg' }}
                        />


                        <View style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            position: 'absolute',
                            borderRadius: 3,
                            bottom: 5,
                            right: 5,
                            padding: 7
                        }}>
                            <Text style={{ color: 'white', fontSize: 19 }}>${price}</Text>
                        </View>

                    </View>

                    <View style={{
                        height: 70,
                        flexDirection: 'column',
                        borderColor: 'cornflowerblue',
                        borderWidth: 1,
                        paddingLeft: 15,
                        backgroundColor: 'lightskyblue',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'black',
                            marginBottom: 5,
                            fontSize: 18
                        }}>{name}</Text>

                        <Text style={{
                            marginBottom: 5,
                            fontSize: 15
                        }}>{mDisplayTime}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}