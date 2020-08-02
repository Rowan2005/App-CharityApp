import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RequestScreen from '../screens/RequestScreen';
import SaveScreen from '../screens/SaveScreen';

export const AppTabNavigator = createBottomTabNavigator({
   
    Save: {
    screen: SaveScreen,
    
  },
  Sponsorships: {
    screen: RequestScreen, 
  },
});
