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

export default class DetailScreen extends Component {
    render() {
        return (
            <ScrollView style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        source={{}}
                        style={{
                            maxHeight: 350,
                            maxWidth: 350,
                        }}
                    />

                    <Text>Art Name</Text>
                    <Text>Price</Text>
                </View>


                <View style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 20,
                    justifyContent: 'center',
                    borderWidth: 1
                }}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.detail}>data</Text>
                </View>

                <View style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 20,
                    justifyContent: 'center',
                    borderWidth: 1
                }}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.detail}>data</Text>
                </View>

                <View style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 20,
                    justifyContent: 'center',
                    borderWidth: 1
                }}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.detail}>data</Text>
                </View>

                <View style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 20,
                    justifyContent: 'center',
                    borderWidth: 1
                }}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.detail}>data</Text>
                </View>



            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },

    detail: {
        color: 'black',
        fontSize: 18,
    }
});