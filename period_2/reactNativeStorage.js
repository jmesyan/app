import React, {Component} from 'react';
import {Text} from 'react-native';
import stroage from '../utils/StorageUtil';


export default class reactNativeStorage extends Component {
	constructor(props) {
	  super(props);
	  storage.save({
	  	key:"testkey",
	  	data:{hello:"welcome"}
	  });
	  this.state = {
	  	txt:null
	  }
	}

	componentDidMount() {
	  this.setState({txt:"async"})
		storage.load({
			key:'testkey',
			autoSync: true,
			syncInBackground: true,
		}).then(ret=>{
			console.log(ret)
			data = ret.hello;
			this.setState({txt:data})
		}).catch(err=>{
			console.warn(err.message);
			data = err.message;
			this.setState({txt:data})
		});
	}

	render(){
		return (
			<Text>
			{this.state.txt}
			</Text>
		);

	}
}