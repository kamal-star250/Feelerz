import React, { Component } from 'react';
import { View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import{createMaterialTopTabNavigator} from 'react-navigation-tabs'  
//import Screens
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import Signup from './src/screens/Signup';
import DashbordScreen from './src/screens/Dashbord';
import FooterScreen from './src/Comman/Footer';
import Profilepage from './src/screens/Profilepage';
import Profile_menu from './src/screens/Profile_menu'; 
import Update_profile from './src/screens/Update_profile';
import Suggested_friend from './src/screens/Suggested_friend';
import Change_password from './src/screens/Change_password';
import Privacy_policy from './src/screens/Privacy_policy';
import About_app from './src/screens/About_app';
import Support from './src/screens/Support';
import Block_user from './src/screens/Block_user';
import Comment from './src/screens/Comment';
import Notifications from './src/screens/Notifications';
import Notofication_post from './src/screens/Notofication_post';
import Message from './src/screens/Message';
import Chatting_page from './src/screens/Chatting_page';
import Test from './src/screens/Test';
import Followesr_list from './src/screens/Followesr_list';
import Tabs from './src/Comman/Tabs';
import Hugs_list from './src/screens/Hugs_list';
import Other_user_profile from './src/screens/Other_user_profile';
import PublicScreen from './src/Comman/Public';
import ProfileScreen from './src/Comman/Public';








const Mainnavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
    },

    Signup:{
      screen:Signup,
      navigationOptions:{
        header:null
      }
    },
    Tabs:{
      screen:Tabs,
      navigationOptions:{
        header:null
      }
    },
    DashbordScreen:{
      screen:DashbordScreen,
      navigationOptions:{
        header:null
      }
     
    },
    FooterScreen:{
      screen:FooterScreen,
      navigationOptions:{
        header:null
      }
    },
   
    Profile_menu:{
      screen:Profile_menu,
      navigationOptions:{
        header:null
      }
    },
    Update_profile:{
      screen:Update_profile,
      navigationOptions:{
        header:null
      }
    },
    Suggested_friend:{
      screen:Suggested_friend,
      navigationOptions:{
        header:null
      }
    },
    Change_password:{
      screen:Change_password,
      navigationOptions:{
        header:null
      }
    },
    Privacy_policy:{
      screen:Privacy_policy,
      navigationOptions:{
        header:null
      }
    },
    About_app:{
      screen:About_app,
      navigationOptions:{
        header:null
      }
    },
    Support:{
      screen:Support,
      navigationOptions:{
        header:null
      }
    },
    Block_user:{
      screen:Block_user,
      navigationOptions:{
        header:null
      }
    },
    Comment:{
      screen:Comment,
      navigationOptions:{
        header:null
      }
    },
    Notifications:{
      screen:Notifications,
      navigationOptions:{
        header:null
      }
    },
    Notofication_post:{
      screen:Notofication_post,
      navigationOptions:{
        header:null
      }
    },
    Message:{
      screen:Message,
      navigationOptions:{
        header:null
      }
    },
    Chatting_page:{
      screen:Chatting_page,
      navigationOptions:{
        header:null
      }
    },
    Test:{
      screen:Test,
      navigationOptions:{
        header:null
      }
    },
    Followesr_list:{
      screen:Followesr_list,
      navigationOptions:{
        header:null
      }
    },
    Hugs_list:{
      screen:Hugs_list,
      navigationOptions:{
        header:null
      }
    },
    Other_user_profile:{
      screen:Other_user_profile,
      navigationOptions:{
        header:null
      }
    },
    Profilepage:{
      screen:Profilepage,
      navigationOptions:{
        header:null
      }
    },
    PublicScreen:{
      screen:PublicScreen,
      navigationOptions:{
        header:null
      }
    }

    
   
  // Tabs:Tabs

},

  {
    initialRouteName: 'Splash'
  })

export default AppContainer = createAppContainer(Mainnavigator)

