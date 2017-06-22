/**** StatusBar***/

'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,

    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
} from 'react-native';

//简单封装一个组件
class CustomButton extends  Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
              <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
class helloworld extends  Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {
        return (
            <View>
              <StatusBar
                  backgroundColor='#ff0000'
                  translucent={true}
                  hidden={true}
                  animated={true}
              />
              <CustomButton text='状态栏隐藏透明效果'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});

AppRegistry.registerComponent('helloworld', () => helloworld);