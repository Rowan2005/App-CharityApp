import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from './screens/SignUpScreen';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
export default function App() {
  return (
  <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  SignUpScreen:{screen: SignUpScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);