/**Switch
***** Navigator https://rnplay.org/apps/z27Nug
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

    getInitialState() {
        return {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        };
    },
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Swtich实例
                </Text>
                <Switch
                    onValueChange={(value) =>this.setState({falseSwitchIsOn: value})}
                    style={{marginBottom:10,marginTop:10}}
                    value={this.state.falseSwitchIsOn}/>
                <Switch
                    onValueChange={(value) =>this.setState({trueSwitchIsOn: value})}
                    value={this.state.trueSwitchIsOn}/>
            </View>
        );
    }

});

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('helloworld', () => helloworld);