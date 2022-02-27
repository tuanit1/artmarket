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

import auth from '@react-native-firebase/auth';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mEmail: '',
            mPassword: '',
        };
    }

    _checkEmailVerify = (navigate) => {
        auth().onAuthStateChanged(function (user) {
            if (user) {
                if (user.emailVerified === false) {
                    ToastAndroid.show('Email is not verified!', ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show('Success!', ToastAndroid.SHORT);
                    navigate('DrawerView');
                }
            } else {
                ToastAndroid.show('Something Wrong!', ToastAndroid.SHORT);
            }
        });
    }

    _signIn = (navigate) => {

        if (this.state.mEmail == '' || this.state.mPassword == '') {
            ToastAndroid.show('Email or password is empty!', ToastAndroid.SHORT);
            return;
        }

        auth()
            .signInWithEmailAndPassword(
                this.state.mEmail,
                this.state.mPassword,
            )
            .then(() => {
                this._checkEmailVerify(navigate);
            })
            .catch(error => {
                if (
                    error.code === 'auth/wrong-password' ||
                    error.code === 'auth/invalid-email'
                ) {
                    alert('Wrong email or password!');
                }

                if (error.code === 'auth/user-not-found') {
                    alert('User is not exist!');
                }

                console.error(error);
            });
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}>
                    <Text
                        style={{
                            color: 'cornflowerblue',
                            fontSize: 40,
                            fontWeight: 'bold',
                        }}>
                        LOGIN SCREEN
                    </Text>
                </View>
                <View
                    style={{
                        flex: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={(text) => {
                            this.setState({ mEmail: text })
                        }}></TextInput>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ mPassword: text })
                        }}></TextInput>
                    <TouchableOpacity
                        onPress={() => this._signIn(navigate)}
                        style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('Signup');
                        }}>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                            Don't have an account? Sign up!
                        </Text>
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
};
