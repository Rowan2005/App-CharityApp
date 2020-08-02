import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationsScreen'
import NotificationScreen from '../screens/NotificationScreen';
import ProfileSettingScreen from '../screens/ProfileSettingScreen'
import LoanAmountScreen from '../screens/LoanAmountScreen';
import AffiliateScreen from '../screens/AffiliateScreen';
import CharityScreen from '../screens/CharityScreen';
import FeePaymentScreen from '../screens/FeePaymentScreen';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
      navigationOptions:{drawerIcon:<Icon name = "home" type = "font-awesome"></Icon>}
    },
    MyDonations : {
      screen : MyDonationScreen,
      navigationOptions:{drawerIcon:<Icon name = "dollar" type = "font-awesome"/>,
      drawerLabel: "My Savings"}
    },
    Notification : {
      screen : NotificationScreen,
      navigationOptions:{drawerIcon:<Icon name = "bell" type = "font-awesome"/>,
      drawerLabel: "Notifications"}
    },
    LoanAmount :{
      screen: LoanAmountScreen,
      navigationOptions:{drawerIcon:<Icon name = "money" type = "font-awesome"/>,
      drawerLabel: "Loan Details"}
    },
    Charity : {
      screen : CharityScreen,
      navigationOptions:{drawerIcon:<Icon name = "gift" type = "font-awesome"/>,
      drawerLabel: "Charity"}
    },
    FeePayment : {
      screen : FeePaymentScreen,
      navigationOptions:{drawerIcon:<Icon name = "bank" type = "font-awesome"/>,
      drawerLabel: "Easy Fee Payment"}
    },
    Affiliate : {
      screen : AffiliateScreen,
      navigationOptions:{drawerIcon:<Icon name = "user" type = "font-awesome"/>,
      drawerLabel: "Affiliate"}
    },
    ProfileSetting : {
      screen : ProfileSettingScreen,
      navigationOptions:{drawerIcon:<Icon name = "gear" type = "font-awesome"/>,
      drawerLabel: "Profile Settings"}
    },
    
    
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

