import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonations from '../screens/MyDonations';
import Notification  from '../screens/notification';
import SettingScreen from '../screens/SettingScreen';
import {Icon} from 'react-native-elements';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon:<Icon name="home" type="fontawesome5"/>
    }
    },
  Setting:{
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon:<Icon name="settings" type="fontawesome"/>,
      drawerLabel:"settings"
    }
  },
  MyDonations:{
    screen : MyDonations,
    navigationOptions:{
      drawerIcon:<Icon name="gift" type="fontawesome"/>,
      drawerLabel:"MyDonations"
    }
  },
  notification:{
    screen : Notification,
    navigationOptions:{
      drawerIcon:<Icon name="bell" type="fontawesome"/>,
      drawerLabel:"notification"
    }
  },
  MyReceivedBooks :{
     screen: MyReceivedBooksScreen,
     navigationOptions:{
     drawerIcon : <Icon name="gift" type ="font-awesome" />,
     drawerLabel : "My Received Books" 
     } 
  },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
