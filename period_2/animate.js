import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Text,
    PanResponder
} from 'react-native';

export default class welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transY : new Animated.Value(0)
        };
        this._panResponder = {}
    }
componentWillMount处预先创建手势响应器
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._returnTrue.bind(this),
            onMoveShouldSetPanResponder: this._returnTrue.bind(this),
            //手势开始处理
            //手势移动时的处理
            onPanResponderMove: Animated.event([null, {
                dy : this.state.transY
            }])
        });
    }

    _returnTrue(e, gestureState) {
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.content, {width: this.state.w, height: this.state.h,
                    transform: [{
                      translateY : this.state.transY
                    }]
                }]}>
                    <Text style={[{textAlign: 'center'}]}>Hi, here is VaJoy</Text>
                </Animated.View>
                <TouchableOpacity>
                    <View style={styles.button} {...this._panResponder.panHandlers}>
                        <Text style={styles.buttonText}>control</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>忽略此按钮</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

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