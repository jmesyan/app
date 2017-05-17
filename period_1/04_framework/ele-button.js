/**
 * Created by jamesyan on 2017/5/13.
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { Button } from 'react-native-elements';

export default class welcome extends Component{
    render(){
        return (
          <View>
              <Button
                  title='BUTTON' buttonStyle={styles.purple}/>

              <Button
                  raised
                  icon={{name: 'cached'}}
                  title='BUTTON WITH ICON'
                  buttonStyle={styles.blue}
              />

              <Button
                  large
                  iconRight
                  icon={{name: 'code'}}
                  title='LARGE WITH RIGHT ICON' />

              <Button
                  large
                  icon={{name: 'envira', type: 'font-awesome'}}
                  title='LARGE WITH RIGHT ICON' />

              <Button
                  large
                  icon={{name: 'squirrel', type: 'octicon'}}
                  title='OCTICON' />
          </View>
        );
    }
}

const styles = StyleSheet.create({
   blue:{
       backgroundColor:'blue'
   },
    purple:{
       backgroundColor:'purple'
   }
});
