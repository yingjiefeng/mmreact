'use strict';


import React, { Component } from 'react';
import { AppRegistry,
TouchableHighlight,
           StyleSheet,
           Text,
           View,
           } from 'react-native';

class helloworld extends Component {
  render() {
    return (
      <View>
        <Text>
          TouchableHighlight实例
        </Text>
        <TouchableHighlight activeOpacity="{0.5}"   underlayColor="rgb(210, 230,255)">
             <Text style="fontsize: 16">点击我</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
AppRegistry.registerComponent('helloworld',() => helloworld);