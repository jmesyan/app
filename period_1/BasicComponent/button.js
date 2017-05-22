import React, {Component} from 'react';
import {View,StyleSheet,TouchableHighlight,Image} from "react-native";
export default class welcome extends  Component{
	render() {
		return (
			<View style={styles.container}>
			{this.renderButton()}
			</View>
		);
	}

	renderButton() {
		return (
			<TouchableHighlight  
			activeOpacity={0.8}
			onHideUnderlay={this._onHideUnderlay}
			onShowUnderlay ={this._onShowUnderlay}
			onPress={this._onPressButton}
			underlayColor="blue"
			>
				<Image
					style={styles.button}
					source={require("../imgs/iei.png")}
				/>
			</TouchableHighlight>
		);
	}

	_onPressButton(){
		console.log("button touched");
	}

	_onHideUnderlay(){
		console.log("_onHideUnderlay");
	}

	_onShowUnderlay(){
		console.log("_onShowUnderlay");
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    	justifyContent:'center',
		alignItems:'center',
    },

	button:{
		width:100,
		height:100,
	},
});
