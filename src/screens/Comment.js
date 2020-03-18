import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Footer from '../Comman/Footer';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


class Comment extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* Header View Start */}
                <View style={Styles.header_main_view}>

                    <View style={{ width: '10%' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profilepage') }}>
                            <Image style={Styles.header_icons} source={require('../Images/back.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.header_right_portion}>
                        <Image style={Styles.header_icons, { right: 5 }} source={require('../Images/heart.png')} />

                        <Text>1 Refeel </Text>
                        <Text>2 Hug</Text>

                    </View>

                </View>
                {/* Scroll view start */}
                <ScrollView>
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
                </ScrollView>


                <View style={Styles.Write_comment_main_view}>
                    <View style={Styles.comment_area}>
                        <View style={{ width: '90%', height: '100%' }}>
                            <TextInput
                                style={{ height: '100%', width: '100%' }}
                                placeholder='Write a comment...'

                            />

                        </View>
                        <View style={{ width: '10%', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image style={Styles.header_icons} source={require('../Images/comments.png')} />
                            </TouchableOpacity>

                        </View>


                    </View>

                </View>

                <View style={{ height: "8%" }}><Footer /></View>



            </View>
        );
    }
}

const Styles = StyleSheet.create({
    header_main_view: {
        height: 40,
        width: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#9e9e9e',
    },
    header_right_portion: {
        width: '90%',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    header_icons: {
        width: 20,
        height: 20,
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
        height: '12%',
        paddingLeft: 10,
        paddingRight: 10,
        borderTopWidth: 2,
        borderColor: '#9e9e9e',
    },
    comment_area: {
        top: 5,
        padding: 10,
        height: 60,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'pink',
        alignItems: 'center'
    }
});

export default Comment;