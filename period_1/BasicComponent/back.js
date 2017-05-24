import React from 'react';
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Navigator,
  View,
  Text
	// BackAndroid
} from 'react-native';


import Splash from './Splash';

const defaultRoute = {
  component: Splash
};

export default class welcome extends React.Component{
	 render(){
    
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

