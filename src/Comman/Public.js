import React, { Component } from 'react';
import { View, Text, Image,ScrollView, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';
import Comment from '../screens/Comment';
// import { useNavigation } from 'react-navigation/native';

 class PublicScreen extends Component {


    Test = () =>{
        // alert(' Everything is Ok...!');
        this.props.navigation.navigate('Comment');

    }
    render() {
        // const navigation = useNavigation();
        return (
            <View>
                <ScrollView>
                    {/* POST AREA START */}
                    <View style={{ height: 390, width: "100%", top: 5, }}>

                        <View style={{ width: "100%", backgroundColor: "#fff", borderRadius: 15, padding: 10 }}>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", height: 60, alignItems: "center" }}>
                                <View style={{ width: "70%", flexDirection: "row" }}>
                                    <View style={{ width: 50 }}>
                                        <Image source={require('../Images/username.png')} style={{ width: 50, height: 50, resizeMode: "contain" }} />
                                    </View>
                                    <View style={{ marginLeft: 10, marginTop: 5 }}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Abdullah Alsayigh</Text>
                                        <Text style={{ fontSize: 11, textAlign: "left" }}>3 days ago</Text>
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
                            <View style={{ flexDirection: "row", padding: 10 }}>
                                <Text style={{ marginLeft: "45%", fontSize: 10 }} > 8 hug</Text>
                                <Text style={{ fontSize: 10, marginLeft: 10 }}> 3 Comment</Text>
                                <Text style={{ fontSize: 10, marginLeft: 10 }}>1 Refeel</Text>
                                <TouchableOpacity onPress={() => {alert('Right Decision')}}>
                                <Image style={{ marginLeft: 10, marginTop: -10 }} source={require('../Images/more.png')} />

                                </TouchableOpacity>
                            </View>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../Images/heart1.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 12, margin: 2 }}> Hug</Text>
                                </View>




                                <TouchableOpacity>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../Images/commentsNews.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 12, margin: 2 }}> Comment</Text>
                                </View>
                                </TouchableOpacity>







                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../Images/refeelNew.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 12, margin: 2 }}> Refeel</Text>
                                </View>
                            </View>
                        </View>
                    </View>{/* END POST AREA */}<View style={{ height: 400, width: "100%", top: 5, }}>

                        <View style={{ width: "100%", backgroundColor: "#fff", borderRadius: 15, padding: 10 }}>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", height: 60, alignItems: "center" }}>
                                <View style={{ width: "70%", flexDirection: "row" }}>
                                    <View style={{ width: 50 }}>
                                        <Image source={require('../Images/username.png')} style={{ width: 50, height: 50, resizeMode: "contain" }} />
                                    </View>
                                    <View style={{ marginLeft: 10, marginTop: 5 }}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Abdullah Alsayigh</Text>
                                        <Text style={{ fontSize: 11, textAlign: "left" }}>3 days ago</Text>
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
                            <View style={{ flexDirection: "row", padding: 10 }}>
                                <Text style={{ marginLeft: "45%", fontSize: 10 }} > 8 hug</Text>
                                <Text style={{ fontSize: 10, marginLeft: 10 }}> 3 Comment</Text>
                                <Text style={{ fontSize: 10, marginLeft: 10 }}>1 Refeel</Text>
                                <Image style={{ marginLeft: 10, marginTop: -10 }} source={require('../Images/more.png')} />

                            </View>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../Images/heart1.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 12, margin: 2 }}> Hug</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../Images/commentsNews.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 12, margin: 2 }}> Comment</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={require('../Images/refeelNew.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 12, margin: 2 }}> Refeel</Text>
                                </View>
                            </View>
                        </View>
                    </View>{/* END POST AREA */}
                </ScrollView>
            </View>
        )
    }
}
PublicScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Text>Home</Text>
       
    )
} 

export default withNavigation(PublicScreen)