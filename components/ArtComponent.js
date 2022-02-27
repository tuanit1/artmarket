import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StatusBar,
    StyleSheet,
    FlatList,
    TextInput,
    Text,
    ToastAndroid,
    Button,
    useColorScheme,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import ArtListItem from './ArtListItem';

export default class ArtComponent extends Component {

    componentDidMount() {
        this.props.onFetchArt();
    }

    render() {


        const { arts } = this.props.data;

        console.log(arts);

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 8, justifyContent: 'center' }}>
                        <TextInput style={{
                            margin: 15,
                            paddingLeft: 15,
                            paddingVertical: 10,
                            borderColor: 'cornflowerblue',
                            borderRadius: 10,
                            borderWidth: 2,
                            color: 'black',
                            fontSize: 18,
                        }}
                            placeholder="Search anything..."></TextInput>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <TouchableOpacity style={{
                            height: 50,
                            width: 70,
                            borderRadius: 5,
                            backgroundColor: 'cornflowerblue',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                            onPress={() => { this.props.onFetchArt() }}>
                            <Image
                                source={require('../icon/search.png')}
                                style={{
                                    width: 20,
                                    height: 20,
                                }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 7 }}>
                    <FlatList
                        data={arts}
                        keyExtractor={(item) => item.id}
                        render={({ item, index }) => {
                            <ArtListItem {...item}></ArtListItem>
                        }}
                    />
                </View>
            </View>
        );
    }
}