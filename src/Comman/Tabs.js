import React from 'react';  
import {createAppContainer} from 'react-navigation';
import{createMaterialTopTabNavigator} from 'react-navigation-tabs'  
import PublicScreen from "./Public";  
import ProfileScreen from './Profile'; 
// import SettingScreen from "./Screens/Settings";  
  
const AppNavigator = createMaterialTopTabNavigator(
    {  
        Public: PublicScreen, 
        Profile: ProfileScreen ,
        

    },  
    {  
        tabBarOptions: {  
            // activeTintColor:'green',
            // inactiveTintColor:'yellow',
            activeTintColor: 'white',  
            showIcon: false,  
            showLabel:true,
            //   scrollEnabled:true,
            style: {  
                backgroundColor:'#27c4fb'  ,
                marginTop:0,
                
                
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);  