import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet,

  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,

} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
// import SplashScreen from 'react-native-splash-screen'

export default class LoginScreen extends Component {
  //     componentDidMount(){
  //       SplashScreen.show();
  //       setTimeout(function () {
  //         SplashScreen.hide();
  //     }, 2000);
  //   }


  render() {
    return (
      <View style={{ flex: 1 }}>

        <ImageBackground
          source={require('../Images/BACKGROUND.png')}
          style={styles.backgroundimage} >

          <ScrollView>
            {/* LOGO AREA */}
            <View style={styles.logoview}>
              <Image style={styles.LOGO} source={require('../Images/logo1.png')} ></Image>
            </View>
            {/* End LOGO AREA */}
            <View style={{ padding: 10, backgroundColor: 'red', height: 180 }}>
              <View style={styles.emailpassfield}>

                <Image style={styles.emailpssicons} source={require('../Images/login_id.png')} />
                <TextInput
                  style={styles.inputfield}
                  placeholder="Login ID"
                  placeholderTextColor='#6DBEF3'

                />
              </View>
              <View style={styles.passwordfield}>

                <Image style={styles.emailpssicons} source={require('../Images/login_key.png')} />

                <TextInput style={styles.inputfield}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor='#6fc2f8'
                />
                <TouchableOpacity style={{ right: 20, top: 20 }}>
                  <Image style={{ height: 17, height: 17, resizeMode: 'contain' }} source={require('../Images/EYE1.png')} />
                </TouchableOpacity>

              </View>
              <View style={{width:'100%', alignItems:'flex-end',top:15}}>
               <TouchableOpacity>
               <Text style={{color:'#fff'}}>Forget Password</Text>
               </TouchableOpacity>

              </View>


            </View>

            {/* START LOGIN AREA  */}

          </ScrollView>



        </ImageBackground>

      </View>
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
    backgroundimage: {
      width: "100%",
      height: "100%"
    },
    logoview: {
      height: 180,
      width: "100%",
      marginTop: 0,
      // backgroundColor:'yellow'
    },
    inputfield: {
      height: 45,
      color: '#ffffff',
      width: "80%",
    },
    secondarea: {
      width: "100%",
      padding: 20,

      backgroundColor: 'red',
      justifyContent: "space-between",
      alignItems: "center",
    },
    emailpassfield: {

      width: "100%",
      //  marginTop:10,
      flexDirection: "row",
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
    },
    passwordfield: {

      width: "100%",
      marginTop: 20,
      flexDirection: "row",
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
    },
    emailpssicons: {
      width: 20,
      height: 20,
      marginTop: 10,
      resizeMode: "contain"
    },

    LOGO: {
      width: "100%",
      height: 160,
      marginTop: 30,
      justifyContent: "center",
      alignItems: "center",
      resizeMode: "contain",

    },
    forget: {
      color: "white",
      fontSize: 20,

    },
    forgetbutton: {
      marginLeft: "60%",
      marginTop: 20,
      color: "white",
      fontSize: 16,
      fontFamily: 'nunito-regular'
    },
    logsignbutton: {
      // fontWeight: "bold", 
      color: "#3A97D1",
      overflow: 'hidden'

    },
    socialicons: {

      width: 50,
      height: 50,
      marginTop: 30,
      // marginLeft: 15
    },

    button: {
      backgroundColor: 'white',
      borderRadius: 12,
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 5,
      textAlign: 'center',
    },
    buttonContainer: {
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      width: 150,
      backgroundColor: "white",
      marginLeft: 5,

    },
  });
