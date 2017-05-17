import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export  default  class welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>
                        空间动态
                    </Text>
                </View>
                <ScrollView  ref={(scrollView) => { _scrollView = scrollView; }}>
                    <View style={styles.three_image_view}>
                        <View style={styles.vertical_view}>
                            <Image source={require('../imgs/igs.png')} style={{alignSelf:'center',width:45,height:45}} />
                            <Text style={styles.top_text}>
                                好友动态
                            </Text>
                        </View>
                        <View style={styles.vertical_view}>
                            <Image source={require('../imgs/eqc.png')} style={{alignSelf:'center',width:45,height:45}}/>
                            <Text style={styles.top_text}>
                                附近
                            </Text>
                        </View>
                        <View style={styles.vertical_view}>
                            <Image source={require('../imgs/iei.png')} style={{alignSelf:'center',width:45,height:45}}/>
                            <Text style={styles.top_text} >
                                兴趣部落
                            </Text>
                        </View>
                    </View>
                    <View style={{height:30,backgroundColor:'#f9f9fb'}}/>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsa.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsb.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nrz.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsa.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsb.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nrz.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsa.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsb.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nrz.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsa.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsb.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nrz.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsa.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsb.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nrz.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsa.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                羽毛球
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nsb.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                火车票
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Image source={require('../imgs/nrz.png')} style={{alignSelf:'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text} >
                                视频
                            </Text>
                        </View>
                        <Image source={require('../imgs/ppe.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { _scrollView.scrollTo({y: 0}); }}>
                    <Text>让我滚回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title_view:{
        flexDirection:'row',
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#27b5ee',
    },
    title_text:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    three_image_view:{
        paddingTop: 15,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'white',
    },
    vertical_view:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        paddingBottom:15,
    },
    top_text:{
        marginTop:5,
        color:'black',
        fontSize:16,
        textAlign:'center'
    },
    rectangle_view:{
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white',
        borderBottomColor:'#dedfe0',
        borderBottomWidth:1,
    },
    rectangle_text:{
        color:'black',
        fontSize:16,
        textAlign:'center',
        paddingLeft:8,
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    }

});