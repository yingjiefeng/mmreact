'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Circle from './Circle';
//Circle style={{width: 100, height: 100}}
class AndroidNativeModule extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Circle
                    style={{width: 100, height: 100}}
                    color="#25c5f7"
                    radius={50}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('AndroidNativeModule', () => AndroidNativeModule);