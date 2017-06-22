/***** ScrollView*/

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';

class helloworld extends Component {

  render() {
    let children = [];

    for (var i = 0; i < 20; i++) {
      children.push(
        <View key={"key_" + i}  >
          <Text>{"T" + i}</Text>
        </View>);
    }
    return (
        <ScrollView  >
          {children}
        </ScrollView>
    );
  }
}
AppRegistry.registerComponent('helloworld', () => helloworld);