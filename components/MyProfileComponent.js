import React, { Component, createRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StatusBar,
    StyleSheet,
    Pressable,
    FlatList,
    TextInput,
    Text,
    ToastAndroid,
    Button,
    useColorScheme,
    Dimensions,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';
import ArtListItem from './ArtListItem';
import auth from '@react-native-firebase/auth';

export default class MyProfileComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.onFetchUser(user.uid);
            }
        });

    }

    _openUpdateArtScreen = () => {
        params = {
            mode: 'add',
            parent: this.props
        }

        this.props.navigation.navigate("UpdateArtScreen", params);
    }

    _openUpdateUserScreen = () => {
        params = {
            parent: this.props
        }

        this.props.navigation.navigate("UpdateUserScreen", params);
    }

    render() {

        const { name } = this.props.user;
        const { arts } = this.props;

        return (
            <ScrollView style={{
                flex: 1,
            }}>
                <View style={{
                    marginLeft: 20,
                    marginTop: 20,
                }}>
                    <Text style={{ fontSize: 20 }}>Welcome back</Text>
                    <Text style={styles.username}>{name}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => { this._openUpdateUserScreen() }}
                    style={styles.edit_btn} >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white'
                    }}>Update information</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { this._openUpdateArtScreen() }}
                    style={styles.add_btn}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white'
                    }}>Post new art</Text>
                </TouchableOpacity>

                <View style={styles.line}></View>

                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <FlatList
                        nestedScrollEnabled
                        data={arts}
                        style={{ flex: 1 }}
                        numColumns={2}
                        renderItem={(item) => {
                            return (
                                <ArtListItem {...item} navigation={this.props.navigation} parent={this.props} itemMode="edit"></ArtListItem>
                            );
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    username: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5,
    },

    edit_btn: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        height: 60,
        width: 350,
        backgroundColor: '#607be8',
        borderRadius: 20
    },

    add_btn: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 60,
        width: 350,
        backgroundColor: '#30ba6f',
        borderRadius: 20
    },

    line: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#607be8',
        height: 2,
    }
})