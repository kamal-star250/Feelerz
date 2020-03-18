import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  props,
  Picker,
  Dropdown,
  Platform,
  TextInput,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,


} from 'react-native';
// import { FlatHeader, Group } from 'react-native-flat-header';
// import Icon from 'react-native-vector-icons/AntDesign';
import { createStackNavigator, createAppContainer } from 'react-navigation';





export default class SignupScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      language: 0
    }
  }
  render() {

    return (

      <View>
        <ImageBackground
          source={require('../Images/backcolor.png')}
          style={{ width: "100%", height: "100%" }}>
          {/* START HEADER AREA */}
          <View style={styles.backarrow}>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Image style={{ marginLeft: 10, marginTop: 10 }}
                source={require('../Images/backarrow.png')} />

            </TouchableOpacity>


            <Text style={styles.headercontaint}>Registration</Text>

          </View>
          {/* END HEADER AREA */}

          {/* START TEXT FILD */}

          <View style={{ padding: 20 }}>
            <Text style={styles.text}>Enter First Name</Text>
            <TextInput
              style={styles.inputtext}
              // placeholderTextColor='#fff'
              // placeholder=" Enter Name"

            />
            <Text style={styles.text}>Enter Last Name</Text>
            <TextInput
              style={styles.inputtext}

              // placeholder="  Last Name"

            />
            <Text style={styles.text}>Enter Email ID</Text>
            <TextInput
              style={styles.inputtext}

              // placeholder="  Email ID"

            />
            <Text style={styles.text}>User Name</Text>
            <TextInput
              style={styles.inputtext}

              // placeholder="Username"

            />
            <Text style={styles.text}>Select Country</Text>

            <View style={styles.inputtext}>


              <Picker
                selectedValue={this.state.language}
                style={{ height: 35, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })

                }>
                <Picker.Item label="India" value="India" />
                <Picker.Item label="USA" value="USA" />
                <Picker.Item label="Saudi Arabia" value="Saudi Arabia" />
                <Picker.Item label="Singapore" value="Singapore" />
                <Picker.Item label="Indonesia" value="Indonesia" />
                <Picker.Item label="Japan" value="Japan" />

              </Picker>
            </View>

            <Text style={styles.text}>Enter Password</Text>
            <TextInput
              style={styles.inputtext}
              secureTextEntry={true}
              placeholder=" Password"

            />

            <Text style={styles.text}>Enter Confirm Password</Text>
            <TextInput
              style={styles.inputtext}

              // placeholder=" Confirm Password"
              secureTextEntry={true}
            />

            <View
              style={styles.submitview}>



              <TouchableHighlight
                style={styles.submitbutton}
                onPress={() => this.props.navigation.navigate('DashbordScreen')}
              >

                <Text style={{color: "#3A97D1" }}


                >Submit</Text>
              </TouchableHighlight>
            </View>


          </View>
          {/* END TEXT FIELD AREA */}

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
    backarrow: {
      width: "100%",
      height: 45,
      flexDirection: "row",
      borderBottomWidth: 2,
      borderColor: "white"
    },
    headercontaint: {
      color: "white",
      padding: 10,
      fontSize: 18,
      marginLeft: "22%",
      fontWeight: "bold",
    },
    text: {
      marginBottom: 5,
      marginLeft: 20,
      color: "white"
    },
    inputtext: {
      paddingLeft:20,
      height: 40,
      width: "100%",
      
      borderColor: "white",
      borderRadius: 20,
      // placeholderTextColor:'blue',


      backgroundColor: "white",
      borderWidth: 2,
      marginBottom: 5,

    },
    button: {
      height: 45,
      width: "100%",
      borderColor: "white",
      borderRadius: 10,
      height: 35,
      backgroundColor: "white",
      borderWidth: 2,
      marginBottom: 5,
    },
    submitview: {

      marginTop: 20,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',

    },
    submitbutton: {
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
