
import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


// import files

import Footer from '../Comman/Footer'

class Notofication_post extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../Images/backcolor.png')}>

                    {/* Header Area stary */}
                    <View style={{ width: '100%', height: 50, padding: 10, borderBottomWidth: 0.5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Notifications')}>
                                    <Image style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        source={require('../Images/backarrow.png')} />

                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Notification Post</Text>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>
                    {/* scrollview start */}
                    <ScrollView>
                        <View style={{ width: '100%', padding: 10,  }}>
                            <View style={Styles.main_notification_view}>

                                <View style={{ flexDirection: 'row', padding: 10, }}>
                                    <View style={{ width: '20%' }}>
                                        <Image style={Styles.profile_img} source={require('../Images/username.png')} />
                                    </View>
                                    <View style={Styles.username_view}>
                                        <View>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Ravi Baghel</Text>
                                            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>2 week ago</Text>
                                        </View>
                                        <View style={Styles.right_circle_view}>
                                            <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../Images/heart.png')} />
                                        </View>
                                    </View>
                                </View>

                                <View style={{ width: '98%', justifyContent: 'flex-end', }}>
                                    <Text style={{ alignSelf: 'flex-end' }}>Hello Kamal Hello Kamal Hello Kamal</Text>

                                </View>

                                <View style={Styles.hug_view}>
                                    <Text style={Styles.hug_text} >3 Hug  </Text>
                                    <Text style={Styles.hug_text}>2 Comment       </Text>
                                    <TouchableOpacity>
                                    <Image style={Styles.three_dots} source={require('../Images/more.png')} />
                                    </TouchableOpacity>

                                </View>
                                <View style={{ padding: 10, top: 10 }}><View style={{ borderWidth: 0.5, borderColor: '#9e9e9e' }}></View></View>


                                <View style={Styles.bottom_hug_view}>
                                    <View style={Styles.inner_hug_view}>
                                        <TouchableOpacity>
                                            <Image style={Styles.card_bottom_Img} source={require('../Images/heart.png')} />
                                        </TouchableOpacity>
                                        <Text style={{ left: 5 }}>Hug</Text>
                                    </View>
                                    <View style={Styles.inner_hug_view}>
                                        <TouchableOpacity>
                                            <Image style={Styles.card_bottom_Img} source={require('../Images/commentsNews.png')} />
                                        </TouchableOpacity>
                                        <Text style={{ left: 5 }}>Comment</Text>
                                    </View>
                                    <View style={Styles.inner_hug_view}>
                                        <TouchableOpacity>
                                            <Image style={Styles.card_bottom_Img} source={require('../Images/refeelNew.png')} />
                                        </TouchableOpacity>
                                        <Text style={{ left: 5 }}>Refeel</Text>
                                    </View>

                                </View>

                            </View>

                        </View>

                        

                    </ScrollView>

                    <View style={{ height: "10%" }}><Footer /></View>




                </ImageBackground>
            </View>

        );
    }
}

const Styles = StyleSheet.create({

    main_notification_view: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        // marginBottom:10
    },
    profile_img: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2
    },
    username_view:{
        width: '80%', 
        padding: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    right_circle_view:{
        height: 30, 
        width: 50, 
        borderRadius: 15, 
        alignItems: 'center', 
        backgroundColor: 'blue', 
        justifyContent: 'center'
    },
    hug_view:{
        // top:20,
        width: '98%', 
        justifyContent: 'flex-end', 
        flexDirection: 'row', 
        top: 5,
    },
    hug_text:{
        alignSelf: 'flex-end',
        fontSize: 12, 
        color: '#9e9e9e' 
    },
    bottom_hug_view:{
        top: 10,
        paddingLeft: 20, 
        paddingRight: 20,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    inner_hug_view:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    card_bottom_Img:{
        height: 25, width: 25, resizeMode: 'contain',
    },
    three_dots:{
        height: 30, width: 40, resizeMode: 'contain',right:5,top:7 
    }


});

export default Notofication_post;
