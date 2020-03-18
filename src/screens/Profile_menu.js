import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';


// import files

import Footer from '../Comman/Footer';
import { ScrollView } from 'react-native-gesture-handler';


class Profile_menu extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ height: 100, width: '100%' }} source={require('../Images/backcolor.png')}>

                    {/* Header Area stary */}
                    <View style={{ width: '100%', height: 100, padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 5 }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Profilepage')}>
                                    <Image style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                        source={require('../Images/backarrow.png')} />

                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>My Profile</Text>
                            </View>
                            <View>

                            </View>
                        </View>


                    </View>
                </ImageBackground>
                {/* User profile or name area */}
                <View style={{ alignItems: 'center', height: 135, marginTop: -50, }}>
                    <View style={Styles.circle_view}>
                        <Image style={Styles.user_profile_image} source={require('../Images/username.png')} />
                    </View>
                    <Text style={{ top: 5, color: '#9E9E9E', fontWeight: 'bold' }}>Jitendra Lodhi</Text>

                </View>
                {/* End headr part */}

                {/* Edits view area */}


                
               <ScrollView>
               <TouchableOpacity onPress={() => {this.props.navigation.navigate('Update_profile')}}> 
                    <View style={Styles.update_profile_view}>
                        <Image style={Styles.edit_icons} source={require('../Images/update_profile2.png')} />
                        <Text style={Styles.edit_text_title}>Update Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Suggested_friend')}}>
                    <View style={Styles.update_profile_view}>
                        <Image style={Styles.edit_icons} source={require('../Images/suggestion_friend2.png')} />
                        <Text style={Styles.edit_text_title}>Suggested Friend</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Change_password')}}>
                    <View style={Styles.update_profile_view}>
                        <Image style={Styles.edit_icons} source={require('../Images/change_p2.png')} />
                        <Text style={Styles.edit_text_title}>Change Password</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Privacy_policy')}}>
                    <View style={Styles.update_profile_view}>
                        <Image style={Styles.edit_icons} source={require('../Images/privacy2.png')} />
                        <Text style={Styles.edit_text_title}>Privacy Policy</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('About_app')}}>
                    <View style={Styles.update_profile_view}>
                        <Image style={Styles.edit_icons} source={require('../Images/aboutapp33.png')} />
                        <Text style={Styles.edit_text_title}>About App</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Support')}}>
                    <View style={Styles.update_profile_view}>
                        <Image style={Styles.edit_icons} source={require('../Images/support2.png')} />
                        <Text style={Styles.edit_text_title}>Support</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Block_user')}}>
                    <View style={Styles.update_profile_view}>
                        <Image style={Styles.edit_icons} source={require('../Images/blockicon2.png')} />
                        <Text style={Styles.edit_text_title}>Blocked User List</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={Styles.update_profile_view}>
                        <Image style={Styles.edit_icons} source={require('../Images/logout2.png')} />
                        <Text style={Styles.edit_text_title}>Logout</Text>
                    </View>
                </TouchableOpacity>


            
               </ScrollView>
                


          






                <View style={{ bottom: 0, position: 'absolute', width: '100%' }}><Footer /></View>

            </View>
        );
    }
}

const Styles = StyleSheet.create({
    circle_view:{
        width: 110, 
        height: 110, 
        borderRadius: 110 / 2,
    },

    user_profile_image:{
        height: '100%', width: '100%', resizeMode: 'contain' 
    },

    update_profile_view: {
        
        height: 45,
        padding: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        borderColor: '#9e9e9e'
    },
    edit_icons: {
        width: 30,
        height: 30,
        left: 10
    },
    edit_text_title: {
        left: 30, color: '#9e9e9e'
    }

});

export default Profile_menu;