
import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


// import files

import Footer from '../Comman/Footer'

class Suggested_friend extends Component {
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
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Suggested Friend</Text>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>

                    <ScrollView>

                        <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                         </View>
                         <View style={{ paddingLeft:10,paddingRight:10,paddingTop:10 }}>
                            <View style={Styles.main_Suggested_view}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <View style={Styles.profile_circle_view}>
                                        <Image style={{height:'100%',width:'100%'}} source={require('../Images/username.png')} />

                                    </View>
                                    <Text style={{ marginLeft:10 }}>Ravi Baghel</Text>

                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <TouchableOpacity style={Styles.follow_btn}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Follow</Text>
                                    </TouchableOpacity>
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
Suggested_friend.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'ios-person' : 'md-person'}
            color={tintColor}
            size={25}
        />
    )
}

const Styles = StyleSheet.create({
    
  main_Suggested_view:{
    padding: 5,
    height: 70, 
    width: '100%', 
    borderRadius: 10, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    justifyContent: 'space-between' 
  },
  profile_circle_view:{
    height:60, 
    width: 60, 
    borderRadius: 60 / 2,
  },
  follow_btn:{
    height: 35, 
    width: 80,
    borderWidth:1,
    paddingTop: 5, 
    paddingBottom: 5, 
    borderRadius: 15,
    borderColor:'pink',
    alignItems: 'center',
    backgroundColor:'blue',
  }

});

export default Suggested_friend;


