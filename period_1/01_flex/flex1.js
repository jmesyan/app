import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item1}></Text>
                <Text style={styles.item2}></Text>
                <Text style={styles.item3}></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'green',
        width:300,
        height:300,
        alignSelf:'center'
    },
    item1: {
        backgroundColor:'red',
        width:100,
        height:100,
        alignSelf:"flex-start"
    },
    item2: {
        backgroundColor:'red',
        width:100,
        height:100
    },
    item3: {
        backgroundColor:'red',
        width:100,
        height:100,
        alignSelf:"flex-end"
    }
});