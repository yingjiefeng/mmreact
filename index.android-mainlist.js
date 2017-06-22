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
                Component = MainListView;
                break;
            case "android-hello":
                Component = AndroidHelloView;
                break;
            case "android-image":
                Component = AndroidImageView;
                break;
            default: //default view
                Component = DefaultView;
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

// var AndroidHelloView = React.createClass({
//     goBack(){
//         this.props.navigator.push({name:"default"});
//     },
//
//     render() {
//         return (
//             <View >
//                 <Text   onPress={this.goBack} >
//                     I am Feed View! Tab to default view!
//                 </Text>
//             </View>
//         )
//     }
// });


var MainListView = React.createClass({
    // onPress={() => this.props.navigator.push(params)}
    // onPressNext:function(){
    //     var modulename = '';
    //     console.log("onPressNext"+modulename);
    //     this.props.navigator.push({name: modulename});
    //
    // },

    getInitialState: function () {
        return {
            modulename:''
        };
    },
    render() {
        // let children = [];
        var index = [{
            'bundle': 'index.android-hello.bundle',
            'jsname': 'index.android-hello.js',
            'modulename': 'android-hello'
        }, {
            'bundle': 'index.android-image.bundle',
            'jsname': 'index.android-image.js',
            'modulename': 'android-image'
        },
            {
                'bundle': 'index.android-json.bundle',
                'jsname': 'index.android-json.js',
                'modulename': 'android-json'
            }];


        // for (var i = 0; i < index.length; i++) {
        //     var modulename = index[i].modulename;
        //     var item = <View key={index[i].bundle}>
        //         <Text style={{fontSize: 16, color: '#ff00ff', margin: 10}}
        //               onPress={() => this.props.navigator.push({name:modulename})}>{index[i].modulename}</Text>
        //     </View>;
        //     children.push(item);
        // }

        return (
            <ScrollView>

                <View key={index[0].bundle}>
                    <Text style={{fontSize: 16, color: '#ff00ff', margin: 10}}
                          onPress={() => this.props.navigator.push({name:index[0].modulename})}>{index[0].modulename}</Text>
                </View>
                <View key={index[1].bundle}>
                    <Text style={{fontSize: 16, color: '#ff00ff', margin: 10}}
                          onPress={() => this.props.navigator.push({name:index[1].modulename})}>{index[1].modulename}</Text>
                </View>
                <View key={index[2].bundle}>
                    <Text style={{fontSize: 16, color: '#ff00ff', margin: 10}}
                          onPress={() => this.props.navigator.push({name:index[2].modulename})}>{index[2].modulename}</Text>
                </View>
            </ScrollView>
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