/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator } from  'react-navigation';
import Splash from './components/Splash';
import Main from './components/Main';

const Navigation =StackNavigator({
    Home:{
      screen:Splash,
    },
    main:{
      screen:Main,
    }

})
export default Navigation;