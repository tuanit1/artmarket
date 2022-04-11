import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    Alert,
    Image,
    ToastAndroid,
    Button,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';

import auth from '@react-native-firebase/auth';

export default class UpdateArtScreen extends Component {

    constructor(props) {
        super(props);

        mode = this.props.route.params.mode;
        item = this.props.route.params.item;

        this.state = mode == 'edit' ?
            {
                mID: item.id,
                mThumb: item.thumb,
                mName: item.name,
                mPrice: item.price,
                mAuthor: item.author,
                mDes: item.description,
                mMode: mode
            }
            :
            {
                mThumb: '',
                mName: '',
                mPrice: 0,
                mAuthor: '',
                mDes: '',
                mMode: mode
            };
    }



    render() {

        const { goBack } = this.props.navigation;
        parent = this.props.route.params.parent;

        const showUpdatesDialog = () => {
            return Alert.alert(
                "Are your sure?",
                "Are you sure you update this ART?",
                [
                    {
                        text: "Yes",
                        onPress: () => {
                            parent.onUpdateArt({
                                id: this.state.mID,
                                name: this.state.mName,
                                thumb: this.state.mThumb,
                                price: this.state.mPrice,
                                author: this.state.mAuthor,
                                desc: this.state.mDes
                            });
                        },
                    },
                    {
                        text: "No",
                    },
                ]
            );
        }

        const showAddDialog = () => {
            return Alert.alert(
                "Are your sure?",
                "Are you sure you add this ART?",
                [
                    {
                        text: "Yes",
                        onPress: () => {
                            auth().onAuthStateChanged((user) => {
                                if (user) {
                                    parent.onAddArt({
                                        uid: user.uid,
                                        name: this.state.mName,
                                        thumb: this.state.mThumb,
                                        price: this.state.mPrice,
                                        author: this.state.mAuthor,
                                        desc: this.state.mDes
                                    });
                                }
                            });
                        },
                    },
                    {
                        text: "No",
                    },
                ]
            );
        }

        showEmptyDialog = () => {
            return Alert.alert(
                "Warning",
                "Please fill all the fields!",
                [
                    {
                        text: "Okay"
                    }
                ]
            );
        }

        return (
            <ScrollView style={{
                flex: 1,
            }}>
                <TouchableOpacity onPress={() => { goBack() }}>
                    <Image
                        source={require('../icon/return.png')}
                        style={{
                            height: 40,
                            width: 40,
                            marginLeft: 20,
                        }}
                    />
                </TouchableOpacity>

                <View style={{
                    marginTop: 15,
                    marginBottom: 25,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Image
                        resizeMode='contain'
                        source={{ uri: this.state.mThumb }}
                        style={{
                            height: 400,
                            width: 300
                        }}
                    />

                </View>

                <View style={styles.prop}>
                    <Text style={styles.title}>Image url</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => {
                            this.setState({ mThumb: text })
                        }}
                        value={this.state.mThumb}
                    ></TextInput>
                </View>

                <View style={styles.prop}>
                    <Text style={styles.title}>Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => {
                            this.setState({ mName: text })
                        }}
                        value={this.state.mName}
                    ></TextInput>
                </View>

                <View style={styles.prop}>
                    <Text style={styles.title}>Price</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                            this.setState({ mPrice: text })
                        }}
                        value={this.state.mPrice}
                    ></TextInput>
                </View>

                <View style={styles.prop}>
                    <Text style={styles.title}>Author</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => {
                            this.setState({ mAuthor: text })
                        }}
                        value={this.state.mAuthor}
                    ></TextInput>
                </View>

                <View style={styles.prop}>
                    <Text style={styles.title}>Description</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => {
                            this.setState({ mDes: text })
                        }}
                        value={this.state.mDes}
                        multiline={true}
                    ></TextInput>
                </View>

                <TouchableOpacity
                    onPress={() => {

                        if (this.state.mThumb == '' || this.state.mPrice == '' || this.state.mDes == '' ||
                            this.state.mAuthor == '' || this.state.mName == '') {
                            showEmptyDialog();
                        }else{
                            if (this.state.mMode == 'edit') {
                                showUpdatesDialog();
                            } else {
                                showAddDialog();
                            }
                        }

                    }}
                    style={this.state.mMode == 'edit' ? styles.button_edit : styles.button_add}>
                    <Text style={{
                        color: 'white',
                        fontSize: 22,
                        fontWeight: 'bold'
                    }}>{this.state.mMode == 'edit' ? "Update" : "Add"}</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 7
    },

    detail: {
        color: 'black',
        fontSize: 22,
    },

    prop: {
        marginHorizontal: 25,
        marginBottom: 30,
        justifyContent: 'center',
    },

    textInput: {
        color: 'black',
        borderColor: 'steelblue',
        borderWidth: 2,
        fontSize: 20,
        marginTop: 5,
        paddingLeft: 15,
        borderRadius: 5
    },

    button_edit: {
        width: 300,
        height: 60,
        marginBottom: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5f5fdc',
        borderRadius: 10,
    },

    button_add: {
        width: 300,
        height: 60,
        marginBottom: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#30ba6f',
        borderRadius: 10,
    }
});