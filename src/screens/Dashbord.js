import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity

} from 'react-native';
// import SearchBar from 'react-native-search-bar';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import Tabs from "../Comman/Tabs"
import profile from '../Comman/Profile'
import Footer from '../Comman/Footer'


export default class DashbordScreen extends Component {

  

  render() {
    return (
      <View style={styles.MainContainer}>
          {/* Header bar start */}
          <View style={{ width: "100%", height: 52, backgroundColor: "#27c4fb", flexDirection: "row" }}>

                <View style={styles.searchiconview}>
                  <Image style={styles.searchicon} 
                  source={require('../Images/search.png')}/>
                </View>

                <View style={{ width: "65%", }}>
                  <TextInput style={styles.inputtext}
                    placeholder="Search"
                  ></TextInput></View>
                <View>

                  <Image source={require('../Images/logo.png')}
                    style={styles.headerlogo}>
                  
                  </Image>
                </View>
                </View>
            {/*End Header bar  */}
             {/*Start story area  */}

              <View style={{width:'100%',height:'84%'}}>
                <Tabs />
              </View>
               
                   {/* <Tabs /> */}
               

              {/*End story area  */}

            {/*Start Footer area  */}

      <View style={{bottom:0,position:'absolute',width:'100%'}}><Footer /></View>
           
           
          {/*End  Footer area  */}



      </View>



    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      width:"100%",
      height:"100%",
      backgroundColor:"#ddd"
    },
    searchiconview:{
      backgroundColor: "white",
      height: 40, 
      marginTop: 10, 
      marginLeft: 15,
      backgroundColor: "white", 
      padding: 5,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,

    },
    searchicon:{
      top:5,
      height: 22, 
      resizeMode: "contain"
    },
    inputtext:{
      width: "100%", 
      height: 40, 
      marginTop: 10, 
      backgroundColor: "white",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    headerlogo:{
      width: 40, 
      resizeMode: "contain", 
      height: 40, 
      marginTop: 10, 
      marginLeft: 10

    },
    footerview:{
    width:"100%",
    height:50, 
    borderWidth:0.2, 
    flexDirection:"row", 
    justifyContent:"space-between",
    position:"absolute",
    bottom:0,
    alignItems:"center",
    backgroundColor:"#fff", padding:10
},

    footericons:{
      width:25, 
      height:25,
      resizeMode:"contain"
    },

  });
