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
import Tabs from "./Tabs"
import {withNavigation} from 'react-navigation'
import profile from '../Comman/Profile'

 class FooterScreen extends Component {
render(){
  return(
  // footer view
    <View style={styles.footerview}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('DashbordScreen')}} >
              <Image 
               style={styles.footericons}
                source={require('../Images/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Message')}}>
              <Image style={styles.footericons}  source={require('../Images/Chat.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image 
                style={{ width:38, 
                  height:38,
                  resizeMode:"contain"}}  
                source={require('../Images/unselected.png')} />
                </TouchableOpacity>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Notifications')}
                  >
              <Image style={styles.footericons}   source={require('../Images/well.png')} />
              </TouchableOpacity>

              <TouchableOpacity
              
              onPress={() => this.props.navigation.navigate('Profilepage')}
              >
              <Image style={styles.footericons}   source={require('../Images/users1.png')} 
              /> 
              </TouchableOpacity>
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
     footericons:{
      width:25, 
      height:25,
      resizeMode:"contain"
    },
    footerview:{
        width:"100%",
        height:50, 
        borderWidth:0.2, 
        flexDirection:"row", 
        justifyContent:"space-between",
        position:"absolute",
        bottom:0,
        position:'absolute',
        alignItems:"center",
        backgroundColor:"#fff", padding:10
    },
    

     
  
   
  });
export default withNavigation(FooterScreen);