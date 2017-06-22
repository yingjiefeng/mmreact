/***** Picker
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
    BackAndroid,
    Picker,

} = ReactNative;



var helloworld = React.createClass({
    getInitialState: function() {
        return {
            language: '',
        };
    },
    render() {
        return (
            <View style={styles.container}>
                <Text >
                    Picker选择器实例
                </Text>
                <Picker
                    style={{width:200}}
                    selectedValue={this.state.language}
                    onValueChange={(value) =>this.setState({language: value})}>
                    <Picker.Item  label="Java" value="java" />
                    <Picker.Item   label="JavaScript" value="javaScript" />
                </Picker>
                <Text>当前选择的是:{this.state.language}</Text>
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