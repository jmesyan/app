import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

export default class  welcome extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = { text: 'purple'};
	}

 	render() {
 		return (<View
 			style={{backgroundColor:"gray", borderBottomColor:'#000000', borderBottomWidth:1}}
 		>
 			<UserInputText
 				multiline={true}
 				onChangeText={(text)=>this.setState({text})}
 				// value={this.state.text}
 				defaultValue = "dfjsfsk"
 				numberOfLines= {4}
 				autoCapitalize="words"
 				placeholder="this is defalut value"
 				placeholderTextColor="purple"
 				secureTextEntry={true}
 			/>
 		</View>
 		);
 	}
}


class UserInputText extends Component {


	render() {
		return (
			<TextInput
				{...this.props}
				maxLength={40}
				editable={true}
				style={{color:"red"}}
				// ref = {
				// 	function(input) {
				// 		if (input != null) {
				// 			console.log("hello");
				// 		}
				// 	}
				// }
				ref = {(c)=>this._input=c}
				onChange = {this._focus.bind(this)}
			/>	
		);
	}

	_focus(){
		if(this._input != null){
			console.log(this._input._lastNativeText);
		}
	}
}