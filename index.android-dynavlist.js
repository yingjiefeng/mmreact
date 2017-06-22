/***** Navigator https://rnplay.org/apps/z27Nug
 */
'use strict';


var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Switch,
    Text,
    TouchableHighlight,
    View,
    AppRegistry,
    Navigator,
    ScrollView,
    BackAndroid
} = ReactNative;

import AndroidHelloView from './AndroidHelloView';
import  AndroidImageView from './AndroidImageView';
import DyMainView from './index.android-dymain';

var helloworld = React.createClass({

    configureScene(route){
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderScene(router, navigator){
        var Component = null;
        this._navigator = navigator;
        console.log('router.name==' + router.name);
        switch (router.name) {
            case "mainlist":
                Component = DyMainView;
                break;
            case "index.android-hello":
                Component = router.component;
                break;
            case "index.android-image":
                Component = router.component;
                break;
            default: //default view
                Component = router.component;
        }

        return <Component navigator={navigator}/>
    },

    componentDidMount() {
        var navigator = this._navigator;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    },


    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    },

    render() {
        return (
            <Navigator
                initialRoute={{name: 'mainlist'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }

});


var DefaultView = React.createClass({

    render(){
        return (
            <View  >
                <Text  >Default view</Text>
            </View>
        )
    }
});

AppRegistry.registerComponent('helloworld', () => helloworld);