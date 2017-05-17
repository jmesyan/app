/**
 * Created by jamesyan on 2017/5/14.
 */

import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {Avatar} from 'react-native-elements';


export default class welcome extends  Component{
    render(){
        return (
            <View style={{width:600,height:800,backgroundColor:'blue',justifyContent:'space-around'}}>
                <Avatar
                    small
                    rounded
                    source={{uri: "http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{height:100,backgroundColor:'red'}}
                />
                <Avatar
                    medium
                    source={{uri: "http://img1.3lian.com/2015/a1/53/d/200.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{height:100,backgroundColor:'red'}}
                />
                <Avatar
                    large
                    source={{uri: "http://img1.3lian.com/2015/a1/53/d/198.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{height:100,backgroundColor:'red'}}
                />
                <Avatar
                    xlarge
                    rounded
                    source={{uri: "http://image.tianjimedia.com/uploadImages/2012/235/9J92Z5E5R868.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{height:100,backgroundColor:'red'}}
                />
            </View>
        );
    }
}

