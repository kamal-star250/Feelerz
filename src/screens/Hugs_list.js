
import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


// import files

import Footer from '../Comman/Footer';
import Tabs from '../Comman/Tabs';
import Hugs_tabs from '../Comman/Hugs_Tabs';

class Hugs_list extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ height: '100%', width: '100%' }} source={require('../Images/backcolor.png')}>

                    {/* Header Area stary */}
                    <View style={{ width: '100%', height: 50, padding: 10,}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
                            <View>
                                <TouchableOpacity
                                   onPress={() => this.props.navigation.navigate('Profilepage')}>
                                    <Image style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        source={require('../Images/backarrow.png')} />

                                </TouchableOpacity>
                            </View>
                            
                            <View>

                            </View>
                        </View>
                    </View>

          


                    <Hugs_tabs />

                        
                        
         
                    
                    <View style={{height:"9%"}}><Footer /></View>
                    


                    
                </ImageBackground>
            </View>

        );
    }
}
// Followesr_list.navigationOptions = {
//     tabBarIcon: ({ tintColor, focused }) => (
//         <Text>Home</Text>
//     )
// }
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

export default Hugs_list;
