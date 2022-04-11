import React, { Component, createRef } from 'react';
import Modal from "react-native-modalbox"
import { RadioButton } from 'react-native-paper';
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

export default class ArtComponent extends Component {

    constructor(props) {
        super(props);
        this.sortModal = React.createRef();
        this.sortIndex = 0;
        this.state = {
            searchText: '',
        }
    }

    componentDidMount() {
        this.props.onFetchArt();
    }

    render() {

        const { arts } = this.props.data;
        console.log(arts);

        const SortModal = () => {
            const [value, setValue] = React.useState(this.sortIndex);

            return (
                <Modal
                    position='center'
                    backdrop={true}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        shadowRadius: 10,
                        borderWidth: 7,
                        borderColor: 'cornflowerblue',
                        width: 300,
                        height: 200
                    }}
                    ref={this.sortModal}
                >
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 15
                    }}>Sort By</Text>

                    <RadioButton.Group onValueChange={(newValue) => {
                        setValue(newValue);
                        this.props.onSort(newValue);
                        this.sortIndex = newValue;
                        this.sortModal.current.close();
                    }} value={value}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <RadioButton color='cornflowerblue' value={1} />
                            <Text style={styles.textModal}>Price: High to Low</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <RadioButton color='cornflowerblue' value={2} />
                            <Text style={styles.textModal}>Price: Low to High</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <RadioButton color='cornflowerblue' value={3} />
                            <Text style={styles.textModal}>Newest</Text>
                        </View>
                    </RadioButton.Group>
                </Modal>
            );
        }

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <SortModal></SortModal>

                <View style={{ flexDirection: 'row', height: 80 }}>
                    <View style={{ flex: 8, justifyContent: 'center' }}>
                        <TextInput style={{
                            marginHorizontal: 15,
                            paddingLeft: 15,
                            paddingVertical: 10,
                            borderColor: 'cornflowerblue',
                            borderRadius: 10,
                            borderWidth: 2,
                            color: 'black',
                            fontSize: 18,
                        }}
                            placeholder="Search anything..."
                            onChangeText={(text) => {
                                this.setState({ searchText: text })
                            }}></TextInput>
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
                            onPress={() => {
                                if (this.state.searchText) {
                                    this.props.onSearch(this.state.searchText);
                                }
                            }}>
                            <Image
                                source={require('../icon/search.png')}
                                style={{
                                    width: 20,
                                    height: 20,
                                }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => { this.sortModal.current.open() }} style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 120,
                    height: 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    borderWidth: 2,
                    borderColor: 'cornflowerblue',
                    alignSelf: 'center',
                    flexDirection: 'row',
                }}>
                    <Text style={{ color: 'black', fontSize: 18, marginRight: 5 }}>Sort</Text>
                    <Image source={require('../icon/sort.png')}
                        style={{
                            height: 20,
                            width: 20
                        }}></Image>
                </TouchableOpacity>

                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <FlatList
                        data={arts}
                        style={{ flex: 1 }}
                        numColumns={2}
                        renderItem={(item) => {
                            return (
                                <ArtListItem {...item} navigation={this.props.navigation} itemMode="show" ></ArtListItem>
                            );
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textModal: {
        color: 'black',
        marginLeft: 5,
        fontSize: 16
    }
});