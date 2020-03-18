



import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


// import files

import Footer from '../Comman/Footer'

class Message extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ height: 50, width: '100%' }} source={require('../Images/backcolor.png')}>

                    {/* Header Area stary */}
                    <View style={{ width: '100%', height: 50, padding: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
                            <View>
                                {/* <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('LoginScreen')}>
                                    <Image style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        source={require('../Images/backarrow.png')} />

                                </TouchableOpacity> */}
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Message</Text>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{width:'100%', backgroundColor:'#F5F5F5', padding:10}}>
                        <View style={{ width: '100%', height: 50, backgroundColor: '#F6FBFE', flexDirection: 'row', alignItems: 'center', borderRadius: 20, }}>
                            <View style={{ width: '12%', left: 10 }}>
                                <Image style={{ width: 25, height: 25 }} source={require('../Images/search.png')} />

                            </View>
                            <View style={{ width: '88%' }}>
                                <TextInput
                                    style={{ width: '100%' }}
                                    placeholder='Search...'
                                    placeholderTextColor='#000'
                                />
                            </View>
                        </View>
                    </View>

                <ScrollView style={{ padding: 10, backgroundColor:'#fff' }}>

                    {/* Search bar area */}
                  



                    {/* User list for chat */}

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Chatting_page')}}>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Styles.main_chat_view}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Image style={Styles.profile_circle} source={require('../Images/username.png')} />
                                <Text style={{ top: 10, left: 5 }}>Kamal urrf. KK</Text>
                            </View>

                            <View style={Styles.days_ago_view}>
                                <Text style={Styles.days_ago_txt}>2 month ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>








                </ScrollView>

                <View style={{ height: "7%" }}><Footer /></View>





            </View >

        );
    }
}

const Styles = StyleSheet.create({

    main_chat_view: {
        height: 80,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#9E9E9E'
    },
    profile_circle: {
        height: 60,
        width: 60,
        borderRadius: 50 / 2
    },
    days_ago_view: {
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    days_ago_txt: {

        fontSize: 12,
        color: '#9e9e9e',
        alignItems: 'flex-end',
    }
});

export default Message;
