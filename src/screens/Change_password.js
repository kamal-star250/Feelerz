

import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


// import files

import Footer from '../Comman/Footer'

class Change_password extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../Images/backcolor.png')}>

                    {/* Header Area stary */}
                    <View style={{ width: '100%', height: 50, padding: 10, borderBottomWidth: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
                            <View>
                                <TouchableOpacity
                               onPress={() => this.props.navigation.navigate('Profile_menu')}>
                                    <Image style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        source={require('../Images/backarrow.png')} />

                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Change Password</Text>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>

                    <ScrollView>
                        {/* Profile view */}
                        <View style={{ width: '100%', height: 110, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 90, width: 90, borderRadius: 90 / 2 }}>
                                <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={require('../Images/username.png')} />

                            </View>
                        </View>
                        {/* Text Fields start */}

                        <View style={{ paddingLeft: 20, paddingRight: 20, }}>
                            <View style={{ marginTop: 10 }}>
                                <TextInput style={Styles.text_field}
                                    placeholder='Old Password'
                                    placeholderTextColor='#fff'
                                />
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <TextInput style={Styles.text_field}
                                    placeholder='New Password'
                                    placeholderTextColor='#fff'
                                />
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <TextInput style={Styles.text_field}
                                    placeholder='Confirm Password'
                                    placeholderTextColor='#fff'
                                />
                            </View>
                            
                            <View style={{width:'100%',alignItems:'center', marginTop:20}}>
                                <TouchableOpacity style={{width:'70%',paddingBottom:10,paddingTop:10,alignItems:'center',borderRadius:5,borderWidth:1,borderColor:'#fff'}}>
                                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Update Password</Text>
                                </TouchableOpacity>
                            </View>
                         </View>

                    </ScrollView>
                    
                    <View style={{height:"10%"}}><Footer /></View>
                    


                    
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

    }

});

export default Change_password;