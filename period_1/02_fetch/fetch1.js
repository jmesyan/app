/**
 * Created by jamesyan on 2017/5/13.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ToastAndroid} from 'react-native';

export default class welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

    }

    fetchUserData() {
        const url = "https://api.github.com/users/mralexgray/repos";
        fetch(url).then((response) => {
            console.log(1111, response);
            return response.json();
        }).then((responseJson) => {
                console.log(2222, responseJson);
                ToastAndroid.show("hello Toast", ToastAndroid.SHORT);
                this.setState({user:responseJson[0].owner});
        }).catch((error) => console.error(error));

    }

    componentDidMount() {
        this.fetchUserData();
    }

    render() {
        let item = this.state.user;
        if (!item) {
            return this.renderLoadView();
        }

        return this.renderItem(item);
    }

    renderLoadView() {
        return (<View><Text>内容加载中......</Text></View>);
    }

    renderItem(item) {
        return (
            <View style={UserItemStyle.container_out}>
                <Image style={UserItemStyle.image_UserAvatar} source={{uri: item.avatar_url}}/>
                <View style={UserItemStyle.container_right}>
                    <Text style={UserItemStyle.text_UserID}>{item.id}</Text>
                    <Text style={UserItemStyle.text_UserType}>{item.type}</Text>
                </View>
            </View>
        )
    }
}

const UserItemStyle = StyleSheet.create({
    container_out: {
        backgroundColor: "white",
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    container_right: {
        flexDirection: "column",
        height: 80,
        flexGrow: 1,
    },
    image_UserAvatar: {
        borderRadius: 80,
        width: 80,
        height: 80,
        resizeMode: "cover",
        marginHorizontal: 12
    },
    text_UserID: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
    },
    text_UserType: {
        color: "gray",
        fontSize: 12,
        lineHeight: 20,
    },
});