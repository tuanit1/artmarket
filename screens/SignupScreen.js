import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    Button,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';

import auth from '@react-native-firebase/auth';

export default class SignupScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mEmail: '',
            mPassword: '',
        };
    }

    _signUp = () => {
        auth()
            .createUserWithEmailAndPassword(this.state.mEmail, this.state.mPassword)
            .then(() => {
                alert('User account created & verify your email!');

                //check is email verify?
                auth().onAuthStateChanged((user) => {
                    if (user) {
                        user.sendEmailVerification();
                    }
                });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    }

    render() {

        const { goBack } = this.props.navigation;

        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderRadius: Platform.OS === 'ios' ? 30 : 0,
            }}>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <Text style={{
                        color: 'cornflowerblue',
                        fontSize: 40,
                        fontWeight: 'bold'
                    }}>SIGNUP SCREEN</Text>
                </View>
                <View style={{
                    flex: 7,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TextInput style={styles.textinput} placeholder="Your Name"></TextInput>
                    <TextInput style={styles.textinput} placeholder="Phone" keyboardType="number-pad"></TextInput>
                    <TextInput style={styles.textinput}
                        placeholder="Email"
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.setState({ mEmail: text })
                        }}></TextInput>
                    <TextInput style={styles.textinput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ mPassword: text })
                        }}></TextInput>

                    <TouchableOpacity onPress={() => { this._signUp() }} style={styles.button} >
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { goBack() }} style={styles.button_back}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>BACK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    textinput: {
        width: 300,
        height: 60,
        margin: 15,
        paddingLeft: 15,
        marginVertical: 15,
        borderColor: 'cornflowerblue',
        borderRadius: 15,
        borderWidth: 2,
        color: 'black',
        fontSize: 20,
    },

    button: {
        width: 300,
        height: 60,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'cornflowerblue',
        borderRadius: 15,
    },

    button_back: {
        width: 300,
        height: 60,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderRadius: 15,
    }
}