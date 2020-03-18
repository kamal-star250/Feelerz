import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    Platform,
    StyleSheet,
    ImageBackground

} from 'react-native';



export default class FirstScreen extends Component {

    componentDidMount() {

        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2000);


    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
    }


    render() {
        return (
            <ImageBackground
                source={require('../Images/backgroud.png')}
                style={{ width: "100%", height: "100%" }}>

                <View style={{width:'100%',alignItems:'center',justifyContent:'center',bottom:20,position:'absolute'}}>
                    <Text style={{color:'#fff'}}>Copyright Work with Social Media</Text>
                    <Text style={{color:'#fff'}}>@2020</Text>
                </View>
            </ImageBackground>
        );

    }

}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',


        },

    });
