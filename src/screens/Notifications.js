



import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


// import files

import Footer from '../Comman/Footer'

class Notifications extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../Images/backcolor.png')}>

                    {/* Header Area stary */}
                    <View style={{ width: '100%', height: 50, padding: 10, borderBottomWidth: 0.5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
                            <View>
                                {/* <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('LoginScreen')}>
                                    <Image style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        source={require('../Images/backarrow.png')} />

                                </TouchableOpacity> */}
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Notification</Text>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>

                    <ScrollView>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Notofication_post')}}>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                                <Image style={Styles.three_dots} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                                <Image style={Styles.three_dots} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                                <Image style={Styles.three_dots} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                            <Image style={Styles.three_dots} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                            <Image style={Styles.three_dots} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                            <Image style={Styles.three_dots} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                            <Image style={Styles.three_dots} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                                <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={Styles.main_notification_view}>
                                <View style={Styles.inner_notification_view}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text>Hello Kamal My Name Is Ravi Baghel,Tell Me About Your Self</Text>
                                        <View style={Styles.ago_view}>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 hours ago</Text>
                                            <TouchableOpacity>
                                                <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../Images/more.png')} />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>





                    </ScrollView>

                    <View style={{ height: "7%" }}><Footer /></View>




                </ImageBackground>
            </View>

        );
    }
}

const Styles = StyleSheet.create({

    text_field: {
        height: 40,
        width: '100%',
        paddingLeft: 10,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    text_field1: {
        height: 100,
        width: '100%',
        paddingLeft: 10,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'red',
        justifyContent: 'center',

    },
    main_notification_view: {
        height: 100, width: '100%', padding: 10
    },
    inner_notification_view: {
        width: '100%',
        height: 90,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    profile_img: {
        width: 60, height: 60, borderRadius: 60 / 2
    },
    ago_view: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    three_dots:{
        height: 30, width: 40, resizeMode: 'contain',right:5 
    }

});

export default Notifications;
