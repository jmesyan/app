import React,{Component} from 'react';
import {StyleSheet,View,Text,ListView} from 'react-native';


export default class welcome extends Component{
	constructor(props){
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged:(r1,r2) => r1 !== r2,
			sectionHeaderHasChanged:(s1,s2) => s1 !== s2
		});
		this.state = {
			dataSource:ds,
			// data:["h","e","l","l","o"]
			data:{a:['h','m'],b:['e','j'],c:['l','f'],d:['l','i'],e:['o','h']}
		}
	}

	render(){
		return (
			<View style = {styles.container}>
				<ListView 
					style = {{marginTop:20}}
					// dataSource = {this.state.dataSource.cloneWithRows(this.state.data)}
					dataSource = {this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
					// renderRow = {(rowData,sectionId,rowId) => this._renderRow(rowData,rowId)}
					renderRow = {(rowData,sectionId,rowId) => this._renderRow(rowData,rowId,sectionId)}
					showsVerticalScrollIndictor = {false}
				/>
			</View>
		);
	}

	_renderRow(rowData,rowId,sectionId){
		return (
			<Text> { rowData+ ' ' + rowId+' '+sectionId } </Text>
		);
	}

	_fetch(url){
		try {
			let repsonse = await fetch(url);
			let json = await response.json();
			return json.result;
		} catch(e) {
			console.log("网络请求失败",e);
		}
	}

   _combineData(){
	 	try {
	 		// statements
	 		var searchData = {};
	 		let service_data = this._fetch(service);
	 		searchData.service = service_data.service_list;
	 		

	 	} catch(e) {
	 		// statements
	 		console.log('合共数据失败',e);
	 	}
	}

}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'blue'
	}
})
