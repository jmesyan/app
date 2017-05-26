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
			/>	
		);
	}
}