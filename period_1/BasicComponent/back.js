import React, {Component}from 'react';
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Navigator,
  View,
  Text,
	BackAndroid
} from 'react-native';


import Splash from './Splash';

const defaultRoute = {
  component: Splash
};

var _navigator;
export default class welcome extends Component{

   componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
  }

  onBackAndroid(){
    console.log(11111);
    const nav = _navigator;
    console.log(nav);
    // return true;
    const routers = nav.getCurrentRoutes();
    console.log(routers);
    if (routers.length > 1) {
      console.log(22222);
      nav.pop();
      return false;
    }
    console.log(33333);
    return false;
  }

   _renderScene(route, navigator){
      _navigator = navigator;
      let Mycomponent=route.component;
      return (
          <Mycomponent {...route.params} navigator={navigator} />
        );
   }


   render(){
    return (
      <Navigator initialRoute={defaultRoute} renderScene={this._renderScene} />
    );
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

