import React from 'react';  
import {createAppContainer} from 'react-navigation';
import{createMaterialTopTabNavigator} from 'react-navigation-tabs'  
 
// import list
import Hugs_list from './Hugs_list';
import Refeels_list from './Refeels_list';



const AppNavigator = createMaterialTopTabNavigator(
    {  
        Hugslist: Hugs_list,  
        Refeelslist: Refeels_list 
    
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