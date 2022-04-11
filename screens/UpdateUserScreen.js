import React, { Component } from 'react';
import storage from '@react-native-firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StatusBar,
    StyleSheet,
    TextInput,
    Alert,
    Text,
    Image,
    ToastAndroid,
    Button,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';

export default class UpdateUserScreen extends Component {

    constructor(props) {
        super(props);

        user = this.props.route.params.parent.user;

        this.state = {
            mUID: user.uid,
            mName: user.name,
            mPhone: user.phone,
            mUri: user.image
        };
    }

    _uploadImage = (image) => {
        return Alert.alert(
            "Warning",
            "Do you want to update image?",
            [
                {
                    text: 'Yes',
                    onPress: () => {
                    
                        imageName = (Math.floor(Math.random() * 9999) + 1) + "_" + image.fileName;

                        let reference = storage().ref(imageName);
                        let task = reference.putFile(image.uri);

                        task.then(async () => {

                            this.setState({ mUri: image.uri });

                            const url = await reference.getDownloadURL();

                            this.props.route.params.parent.onUpdateImage(url, this.state.mUID);
                   
                        }).catch((e) => console.log('uploading image error => ', e));
                    }
                },
                {
                    text: 'No'
                }
            ]
        );

    }

    _updateImage = async () => {

        const options = {
            mediaType: 'photo',
        }
        const result = await launchImageLibrary(options);

        if (result.didCancel) {
            alert("User canceled pick image!");
        } else if (result.errorCode) {
            alert("Error: " + result.errorCode);
        } else {
            //console.log(result.assets[0]);
            this._uploadImage(result.assets[0]);
        }


    }

    

    render() {

        const { goBack } = this.props.navigation;
        parent = this.props.route.params.parent;

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
                            marginBottom: 30
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { this._updateImage() }}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Image
                        source={this.state.mUri == '' ? require('../icon/user.png') : { uri: this.state.mUri }}
                        style={{
                            width: 300,
                            height: 300,
                            marginLeft: 20,
                            marginBottom: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={styles.prop}>
                    <Text style={styles.title}>UID: {this.state.mUID}</Text>
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
                    <Text style={styles.title}>Phone</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                            this.setState({ mPhone: text })
                        }}
                        value={this.state.mPhone}
                    ></TextInput>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        parent.onUpdateUser({
                            uid: this.state.mUID,
                            name: this.state.mName,
                            phone: this.state.mPhone
                        })
                    }}
                    style={styles.button_edit}>
                    <Text style={{
                        color: 'white',
                        fontSize: 22,
                        fontWeight: 'bold'
                    }}>Update</Text>
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