'use strict';  
 import React,{Component} from "react";
 import {
   ScrollView,  
  StyleSheet,  
  RefreshControl,  
  Text,  
  View
 } from 'react-native';
   
const styles =StyleSheet.create({  
  row: {  
    borderColor: 'red',  
    borderWidth: 5,  
    padding: 20,  
    backgroundColor: '#3a5795',  
    margin: 5,  
  },  
  text: {  
    alignSelf: 'center',  
    color: '#fff',  
  },  
  scrollview: {  
    flex: 1,  
  }
});  
   
class Row extends Component{
   _onClick() {  
    this.props.onClick(this.props.data);  
  }

  render() {  
    return (  
        <View style={styles.row}>  
          <Text style={styles.text}>  
            {this.props.data.text}  
          </Text>  
        </View>  
    );  
  }
}

export default class welcome extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isRefreshing: false,  
      loaded: 0,  
      rowData: Array.from(new Array(20)).map(  
        (val, i) => ({text:'初始行 ' + i})
        )  
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillMount() {
      console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
     console.log('componentWillUnmount');
  }

  render(){  
     console.log("render");
    const rows = this.state.rowData.map((row,ii) => {  
      return <Row key={ii} data={row}/>;  
    });  
    return (  
      <ScrollView  
        style={styles.scrollview}  
        refreshControl={  
          <RefreshControl  
           refreshing={this.state.isRefreshing}  
            onRefresh={this._onRefresh.bind(this)}  
            colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}  
           progressBackgroundColor="#ffffff"  
          />  
        }>  
        {rows}  
      </ScrollView>  
    );  
  }

  _onRefresh() {
    console.log(11111);
    this.setState({
      isRefreshing:true
    });
    console.log(22222);
    setTimeout(() => {
      console.log(33333);  
      // 准备下拉刷新的5条数据  
      const rowData = Array.from(new Array(5))  
      .map((val, i) => ({  
        text: '刷新行 ' + (+this.state.loaded + i)  
      }))  
      .concat(this.state.rowData);  
   
      this.setState({  
        loaded: this.state.loaded + 5,  
        isRefreshing: false,  
        rowData: rowData,  
      });  
    }, 5000);  
  }

}

