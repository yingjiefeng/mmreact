import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';


import msearch from './mm/search/msearch';
// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('msearch', () => msearch);