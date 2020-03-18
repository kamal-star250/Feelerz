import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Modal, Button, ScrollView, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';  




import Footer from '../Comman/Footer';


class Profilepage extends Component {
    state = {
        modalVisible: false,
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <ScrollView>

                    <View style={{ height: 300, borderWidth: 0.5, borderColor: '#9e9e9e' }}>
                        <ImageBackground style={{ width: "100%", height: "100%", }} source={require('../Images/kkprofile.jpeg')} >
                            <View style={{ height: '100%', width: '100%' }}>
                                <ImageBackground style={{ width: "100%", height: "100%", opacity: 0.8, }} source={require('../Images/backprofile.png')} >
                                    {/* Propfile view  */}
                                    <View style={{ height: 100, width: '100%', flexDirection: 'row' }}>
                                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => { this.toggleModal(true) }}>
                                                <Image style={{ width: 70, height: 70, top: 30, borderRadius: 70 / 2 }} source={require('../Images/kkprofile.jpeg')} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ left: 150, top: -50 }} onPress={() => { this.props.navigation.navigate('Profile_menu') }}>
                                                <Image style={{ height: 25, width: 25, resizeMode: "contain", alignSelf: 'flex-end', }} source={require('../Images/ThreeDot.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    {/* User name area */}
                                    <View style={{ alignItems: 'center', top: 10, height: 30, }}>
                                        <Text style={{ fontSize: 16, color: '#fff', }}>Ravi Baghel</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', top: 10, height: 30, }}>
                                        <Text style={{ fontSize: 16, color: '#fff', }}>Ravi Baghel</Text>
                                    </View>
                                    {/* Followers area */}
                                    <View style={{ height: 30, flexDirection: 'row', width: '100%', top: 10, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 110, }}>
                                            <View>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Followesr_list') }}>
                                                <Text style={{ color: "#fff" }}>200 Following</Text>
                                             </TouchableOpacity>
                                            </View>
                                            <View style={{ borderWidth: 0.5, borderColor: '#fff', height: 15, top: 3 }}></View>

                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 110, }}>
                                            <View>
                                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Followesr_list') }}>
                                                    <Text style={{ color: "#fff" }}>200 Followers</Text>
                                                </TouchableOpacity>

                                            </View>
                                            <View style={{ borderWidth: 0.5, borderColor: '#fff', height: 15, top: 3 }}></View>

                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <View>
                                                <Text style={{ color: "#fff" }}>200 Feels</Text>
                                            </View>
                                        </View>
                                    </View>
                                    {/* Gender Area  */}
                                    <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row', top: 10 }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: '#fff' }}>Gender</Text>
                                            <Text style={{ color: '#fff' }}>Male</Text>

                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: '#fff' }}>Age</Text>
                                            <Text style={{ color: '#fff' }}>19</Text>

                                        </View>
                                    </View>
                                    {/* Status view */}
                                    <View style={{ alignItems: 'center', top: 20 }}>
                                        <Text style={{ color: '#fff' }}>Always Happy</Text>

                                    </View>
                                </ImageBackground>
                            </View>
                        </ImageBackground>
                    </View>
                    {/* Post Area */}

                    <View style={{ height: 400, width: "100%", }}>

                        <View style={{ width: "100%", backgroundColor: "#fff", borderWidth: 0.5, borderColor: '#9e9e9e', padding: 10 }}>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", height: 60, alignItems: "center" }}>
                                <View style={{ width: "70%", flexDirection: "row" }}>
                                    <View style={{ width: 50 }}>
                                        <Image source={require('../Images/username.png')} style={{ width: 50, height: 50, resizeMode: "contain" }} />
                                    </View>
                                    <View style={{ marginLeft: 10, marginTop: 5 }}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Abdullah Alsayigh</Text>
                                        <Text style={{ fontSize: 11, textAlign: "left", color: '#9e9e9e' }}>3 days ago</Text>
                                    </View>
                                </View>
                                <View style={{ width: "30%" }}>
                                    <View style={{ padding: 5, borderRadius: 10, backgroundColor: "#27c4fb", }}>
                                        <Text style={{ textAlign: "center", color: "#fff" }}>Loving</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "100%", marginTop: 10 }}>
                                <Text>Hey Buddy How's You going its too cool</Text>
                            </View>
                            <View style={{ width: "100%", borderRadius: 5, overflow: "hidden", marginTop: 10 }}>
                                <Image source={require('../Images/post.jpg')} style={{ width: '100%', height: 200, }} />
                            </View>
                            <View style={{ flexDirection: "row", padding: 10, borderBottomWidth: 0.3, borderColor: '#9e9e9e' }}>
                                <Text style={{ marginLeft: "45%", fontSize: 10, color: '#9e9e9e' }} > 8 hug</Text>
                                <Text style={{ fontSize: 10, marginLeft: 10, color: '#9e9e9e' }}> 3 Comment</Text>
                                <Text style={{ fontSize: 10, marginLeft: 10, color: '#9e9e9e' }}>1 Refeel</Text>

                                {/* open modal */}
                                <TouchableOpacity onPress={this.toggleModal} >
                                    <Image style={{ marginLeft: 10, marginTop: -10 }} source={require('../Images/more.png')} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", top: 5 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../Images/heart1.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 12, margin: 2, color: '#9e9e9e' }}> Hug</Text>
                                </View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Comment') }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={require('../Images/commentsNews.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                        <Text style={{ fontSize: 12, margin: 2, color: '#9e9e9e' }}> Comment</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../Images/refeelNew.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 12, margin: 2, color: '#9e9e9e' }}> Refeel</Text>
                                </View>
                            </View>
                        </View>
                    </View>{/* END POST AREA */}

                    {/* <View style={{ alignItems: 'center', bottom: 20 }}>
                        <TouchableHighlight onPress={() => { this.toggleModal(true) }}>
                            <Text >Open Modal</Text>
                        </TouchableHighlight>

                    </View> */}
                </ScrollView>
                <View style={{ height: '7%' }}>
                    <Footer />

                </View>


                {/* Modal area Start */}

                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={{ width: '100%', height: '100%', backgroundColor: '#000' }} >
                        <View style={{ height: '10%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => {
                                this.toggleModal(!this.state.modalVisible)
                            }}>
                                <Image style={{ height: 20, width: 20, resizeMode: 'contain', left: 20 }} source={require('../Images/clear3.png')} />

                            </TouchableOpacity>
                        </View>
                        <View style={{ height: '90%', width: '100%', }}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../Images/kkprofile.jpeg')}>


                            </Image>

                        </View>

                    </View>
                </Modal>



            </View>
        );
    }
}
Profilepage.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'ios-person' : 'md-person'}
            color={tintColor}
            size={25}
        />
    )
}

const Styles = StyleSheet.create(
    {
        following: {
            color: "#fff",
            padding: 5,


        },
    });
export default Profilepage;
