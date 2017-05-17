/**
 * Created by jamesyan on 2017/5/13.
 */
import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:'home'
        };
    }

    render(){
        return (
            <TabNavigator
                tabBarStyle={Styles.tab_container}
                tabBarShadowStyle={{height: 0}}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="home"
                    renderIcon={()=><Image source={require('../imgs/ic_tab_strip_icon_feed.png')} style={Styles.tab_icon}/>}
                    renderSelectedIcon={()=><Image source={require('../imgs/ic_tab_strip_icon_feed_selected.png')} style={Styles.tab_icon}/>}
                    badgeText="1"
                    onPress={()=>this.setState({selectedTab:'home'})}>
                    <View><Text>hello tab 1</Text></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="profile"
                    renderIcon={()=><Image source={require('../imgs/ic_tab_strip_icon_category.png')} style={Styles.tab_icon}/>}
                    renderSelectedIcon={()=><Image source={require('../imgs/ic_tab_strip_icon_category_selected.png')} style={Styles.tab_icon}/>}
                    badgeText="2"
                    onPress={()=>this.setState({selectedTab:'profile'})}>
                    <View><Text>hello tab 2</Text></View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const Styles = StyleSheet.create({
    tab_container: {
        height: 46,
        overflow: 'hidden'
    },
    tab_icon:{
        width:38,
        height:38,
        resizeMode:'contain',
        backgroundColor:"green",
        marginTop:50,
        paddingTop:20
    }
})
