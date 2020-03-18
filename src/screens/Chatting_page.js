Chatting_page

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Footer from '../Comman/Footer';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


class Chatting_page extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* Header View Start */}
                <View style={{flexDirection:'row', height:70, width:'100%',paddingLeft:10, paddingRight:10, alignItems:'center', backgroundColor:'#fff', borderBottomWidth:0.5, borderColor:'#9e9e9e'}}>
                    <View style={{width:'45%',flexDirection:'row' ,alignItems:'center',justifyContent:'space-between' }}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Message')}}>
                            <Image  style={{height:30, width:30,  resizeMode:'contain'}} source={require('../Images/default_back_icon3.png')} />
                        </TouchableOpacity>

                       <View style={{flexDirection:'row'}}>
                       <Image style={{height:50,width:50, borderRadius:50/2}} source={require('../Images/username.png')} />
                        <Text style={{left:10}}>
                            Hello Kamal
                        </Text>

                       </View>

                    </View>
                    <View style={{width:'55%',alignItems:'flex-end',}}>
                        <View style={{width:40, height:30,right:10, borderRadius:40/2, backgroundColor:'blue', alignItems:'center', justifyContent:'center'}}>
                        <Image style={{width:20, height:20, resizeMode:'contain',}} source={require('../Images/heart.png')} />


                        </View>
                    </View>
                </View>
                {/* Scroll view start */}
                <ScrollView>
                    {/* <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View>
                    <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View>
                    <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View>
                    <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View>
                    <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View>
                    <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View>
                    <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View>
                    <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View>
                    <View style={Styles.main_comment_view}>
                        <View style={Styles.inner_comment_view}>
                            <Image style={Styles.comment_profile} source={require('../Images/username.png')} />
                            <View style={Styles.comment_text_field}>
                                <Text style={{ fontWeight: 'bold' }}>Ravi Baghel</Text>
                                <Text>Hajan@ankitsingh107</Text>
                            </View>
                        </View>
                        <Text style={Styles.days_ago}>3 Month ago</Text>
                    </View> */}
                </ScrollView>


                <View style={Styles.Write_comment_main_view}>
                    <View style={Styles.comment_area}>
                        <View style={{ width: '90%', height: '100%' }}>
                            <TextInput
                                style={{ height: '100%', width: '100%',fontSize:18 }}
                                placeholder='Write a message...'
                                placeholderTextColor='#000'
                                // fontSize='15'

                            />

                        </View>
                        <View style={{ width: '10%', alignItems: 'center',right:5 }}>
                            <TouchableOpacity>
                                <Image style={Styles.header_icons} source={require('../Images/comments.png')} />
                            </TouchableOpacity>

                        </View>


                    </View>

                </View>

                <View style={{ height: "7%" }}><Footer /></View>



            </View>
        );
    }
}

const Styles = StyleSheet.create({
    header_main_view: {
        height: 60,
        width: '100%',
        padding:10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#9e9e9e',
    },
    header_right_portion: {
        width: '20%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        backgroundColor:'yellow'
    },
    header_icons: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    main_comment_view: {
        width: '100%',
        height: 100,
        justifyContent: 'center'
    },
    inner_comment_view: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
    },
    comment_profile: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    comment_text_field: {
        left: 15,
        width: 150,
        height: 70,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'pink',
    },
    days_ago: {
        fontSize: 10,
        left: 90,
        top: 5,
        color: '#9e9e9e'
    },
    Write_comment_main_view: {
        height: '11%',
        paddingLeft: 10,
        paddingRight: 10,
        borderTopWidth: 1,
        backgroundColor:'#fff',
        borderColor: '#9e9e9e',
    },
    comment_area: {
        top: 10,
        paddingLeft:10,
        fontSize:20,
        height: 50,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        alignItems: 'center'
    }
});

export default Chatting_page;