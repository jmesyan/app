import React,{Component} from 'react';
import {StyleSheet,View,Text,ListView} from 'react-native';


export default class welcome extends Component{
	constructor(props){
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged:(r1,r2) => r1 != r2
		});
		this.state = {
			dataSource:ds,
			data:["h","e","l","l","o"]
		}
	}

	render(){
		return (
			<View style = {styles.container}>
				<ListView 
					style = {{marginTop:20}}
					dataSource = {this.state.dataSource.cloneWithRows(this.state.data)}
					renderRow = {(rowData,sectionId,rowId) => this._renderRow(rowData,rowId)}
					showsVerticalScrollIndictor = {false}
				/>
			</View>
		);
	}

	_renderRow(rowData,rowId){
		return (
			<Text>{rowData+ ' ' + rowId}</Text>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'blue'
	}
})
