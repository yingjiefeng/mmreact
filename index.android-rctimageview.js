import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//引入这个模块

import ImageView from './ImageView';
class Bananas extends Component {
    render() {
        return (
            <ImageView src= "http://i.imgur.com/UePbdph.jpg"  style={{width: 400, height: 400}}/>
        );
    }
}

AppRegistry.registerComponent('helloworld', () => Bananas);