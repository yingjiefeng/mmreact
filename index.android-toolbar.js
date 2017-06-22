/**** ToolbarAndroid
http://m.blog.csdn.net/article/details?id=50612786
***/
'use strict';


import React, { Component } from 'react';
import { AppRegistry,

           StyleSheet,
           Text,
           View,
           } from 'react-native';

var ToolbarAndroid =require('ToolbarAndroid');
class helloworld extends Component {
  render() {
    return (
       <ToolbarAndroid
            actions={toolbarActions}
            navIcon={require('./img/ic_settings_black_48dp.png')}
            style={styles.toolbar}
            subtitle="副标题"
            title="主标题"></ToolbarAndroid>
    );
  }
}
var toolbarActions =[
  {title: 'Create', icon:require('./img/ic_create_black_48dp.png'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon:require('./img/ic_settings_black_48dp.png'), show: 'always'},
];
const styles =StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});
AppRegistry.registerComponent('helloworld',() => helloworld);