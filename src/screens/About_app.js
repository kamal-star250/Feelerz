




import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


// import files

import Footer from '../Comman/Footer'

class About_app extends Component {
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
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>About App</Text>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>

                    <ScrollView>




                        
                        
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

export default About_app;
