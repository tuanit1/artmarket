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

        const { thumb, ownername, author, description, name, price, time } = this.props.route.params;
        const { goBack } = this.props.navigation;

        console.log(thumb);

        return (
            <ScrollView style={{
                flex: 1,
            }}>
                <TouchableOpacity onPress={() => {goBack()}}>
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
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Image
                        resizeMode='contain'
                        source={{ uri: thumb }}
                        style={{
                            height: 400,
                            width: 300
                        }}
                    />

                    <Text style={{
                        color: 'steelblue',
                        fontWeight: 'bold',
                        fontSize: 30,
                        textAlign: 'center',
                        marginVertical: 5
                    }}>{name}</Text>
                    <Text style={{
                        color: 'green',
                        fontWeight: 'bold',
                        fontSize: 22,
                        textAlign: 'center',
                        marginBottom: 15
                    }}>Price: ${price}</Text>
                </View>


                <View style={styles.prop}>
                    <Text style={styles.title}>Author</Text>
                    <Text style={styles.detail}>{author}</Text>
                </View>

                <View style={styles.prop}>
                    <Text style={styles.title}>Owner</Text>
                    <Text style={styles.detail}>{ownername}</Text>
                </View>

                <View style={styles.prop}>
                    <Text style={styles.title}>Description</Text>
                    <Text style={styles.detail}>{description}</Text>
                </View>

                <View style={styles.prop}>
                    <Text style={styles.title}>Posted at</Text>
                    <Text style={styles.detail}>{time}</Text>
                </View>



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
    }
});