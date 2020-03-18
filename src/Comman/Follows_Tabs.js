import React from 'react';  
import {createAppContainer} from 'react-navigation';
import{createMaterialTopTabNavigator} from 'react-navigation-tabs'  
// import Followesr_list from "../screens/Followesr_list";  
import Suggested_list from './Suggetion_list';
const AppNavigator = createMaterialTopTabNavigator(
    {  
        Following: Suggested_list,  
        Followers: Suggested_list 
      
 // Settings: SettingScreen,  
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
                backgroundColor:'none'  ,
                marginTop:0,
                // borderBottomWidth:0.5,
                // borderColor:'#9e9e9e'
                
                
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);  