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

export default class ArtListItem extends Component {

    render() {
        return (
            <TouchableOpacity >
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'darksalmon',
                    marginBottom: 2
                }}>
                    <Image
                        source={{ uri: img_path }}
                        style={{
                            width: 120,
                            height: 120,
                            marginLeft: 10,
                            marginTop: 10,
                            marginBottom: 10,
                            borderRadius: 5,
                        }}
                        PlaceholderContent={{ uri: server_url + 'image/' + 'tuan.jpg' }}
                    />
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={styles.flatListItem}>Họ tên: <Text style={{ fontWeight: 'bold' }}>{this.props.item.name}</Text></Text>
                        <Text style={styles.flatListItem}>Lớp tham gia: <Text style={{ fontWeight: 'bold' }}>{this.props.item.class_name}</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    // render() {
    //     return (

    //         <View style={{
    //             height: 30,
    //             backgroundColor: 'red',
    //             marginTop: 15
    //         }}>

    //         </View>
    //         // <View
    //         //     style={{
    //         //         height: 350,
    //         //         width: 150,
    //         //     }}>

    //         //     <View style={{
    //         //         flex: 5,
    //         //     }}>
    //         //         <Image
    //         //             source={{ uri: img_path }}
    //         //             style={{
    //         //                 flex: 1,
    //         //             }}
    //         //         // PlaceholderContent={{ uri: server_url + 'image/' + 'tuan.jpg' }}
    //         //         />
    //         //     </View>

    //         //     <View style={{
    //         //         flex: 1,
    //         //         flexDirection: column,
    //         //         paddingLeft: 15,
    //         //         backgroundColor: 'cornflowerblue',
    //         //         justifyContent: 'space-around'
    //         //     }}>
    //         //         <Text>Name</Text>
    //         //         <Text>Price</Text>
    //         //         <Text>Owner</Text>
    //         //     </View>

    //         // </View>
    //     );
    // }
}