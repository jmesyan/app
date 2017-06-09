import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Text,
    PanResponder,
    Easing
} from 'react-native';

var _animateHandler,
    _isFirsPress = 0;
export default class welcome extends Component {
    componentDidMount() {
        _animateHandler = Animated.timing(this.state.opacityAnmValue, {
            toValue: 1,
            duration: 6000,
            easing: Easing.linear
        })
    }

    constructor(props) {
      super(props);
    
      this.state = { opacityAnmValue : new Animated.Value(0) };//设置透明度动画初始值
    }

    _onPress() {

        if(_isFirsPress == 0){
            _animateHandler.start && _animateHandler.start();
            _isFirsPress = 1
        }
        else {
            this.state.opacityAnmValue.stopAnimation(value => {
                Alert.alert(
                    '动画结束，最终值：',
                    JSON.stringify(value),
                    [
                        {text: 'OK', onPress: () => {}}
                    ]
                )
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.content, {width: 200, height: 20, opacity: this.state.opacityAnmValue}]}>
                    <Text style={[{textAlign: 'center'}]}>Hi, here is VaJoy</Text>
                </Animated.View>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>忽略本按钮</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

