/**
 * Created by jamesyan on 2017/5/13.
 */
import React,{Component} from "react";
import {StyleSheet,View,Text} from "react-native";

export default class welcome extends Component{
    render(){
        return (
          <View style = {styles.container}>
              <Text style = {styles.item1}></Text>
              <Text style = {styles.item2}></Text>
              <Text style = {styles.item3}></Text>
              <Text style = {styles.item4}></Text>
              <Text style = {styles.item5}></Text>
              <Text style = {styles.item6}></Text>
              <Text style = {styles.item7}></Text>
              <Text style = {styles.item8}></Text>
              <Text style = {styles.item9}></Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       backgroundColor:'green',
       justifyContent:'space-between',
       alignContent:'space-between',
       alignSelf:'center',
       flexWrap:'wrap',
       flexDirection:'row',
       width:300,
       height:300,
   },
    item1:{
        flexGrow: 1,
        margin: 4,
        backgroundColor:'blue',
        width:80,
        height:80
    }, item2:{
        margin: 4,
        flexGrow: 1,
        backgroundColor:'blue',
        width:80,
        height:80
    }, item3:{
        margin: 4,
        flexGrow: 1,
        backgroundColor:'blue',
        width:80,
        height:80
    }, item4:{
        margin: 4,
        flexGrow: 1,
        backgroundColor:'blue',
        width:80,
        height:80
    }, item5:{
        margin: 4,
        flexGrow: 1,
        backgroundColor:'blue',
        width:80,
        height:80
    }, item6:{
        margin: 4,
        flexGrow: 1,
        backgroundColor:'blue',
        width:80,
        height:80
    }, item7:{
        margin: 4,
        flexGrow: 1,
        backgroundColor:'blue',
        width:80,
        height:80
    }, item8:{
        margin: 4,
        flexGrow: 1,
        backgroundColor:'blue',
        width:80,
        height:80
    }, item9:{
        margin: 4,
        flexGrow: 1,
        backgroundColor:'blue',
        width:80,
        height:80
    }
});
