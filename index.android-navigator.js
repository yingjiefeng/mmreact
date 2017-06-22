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
    BackAndroid
} = ReactNative;



var helloworld = React.createClass({

    configureScene(route){
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderScene(router, navigator){
        var Component = null;this._navigator = navigator;
        switch(router.name){
            case "welcome":
                Component = WelcomeView;
                break;
            case "feed":
                Component = FeedView;
                break;
            default: //default view
                Component = DefaultView;
        }

        return <Component navigator={navigator} />
    },

    componentDidMount() {
        var navigator = this._navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
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
                initialRoute={{name: 'welcome'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }

});

var FeedView = React.createClass({
    goBack(){
        this.props.navigator.push({name:"default"});
    },

    render() {
        return (
            <View >
                <Text   onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>
        )
    }
});


var WelcomeView = React.createClass({
    onPressFeed() {
        this.props.navigator.push({name: 'feed'});
    },


    render() {
        return (
            <View  >
                <Text   onPress={this.onPressFeed} >
                    This is welcome view.Tap to go to feed view.
                </Text>
            </View>
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