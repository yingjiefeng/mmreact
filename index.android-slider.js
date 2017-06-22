/***** Slider  http://blog.csdn.net/p106786860/article/details/51338764
 */

'use strict';
var React = require('react');
var ReactNative = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Slider,
} = ReactNative;

var SliderExample = React.createClass({
    getDefaultProps: function(){
        return {
            value: 0,
        };
    },
    getInitialState: function(){
        return {
            value: 0,
        };
    },
    render: function(){
        return (
            <View>
                <Text style={styles.text}>
                    {this.state.value && +this.state.value.toFixed(3)}
                </Text>
                <Slider
                    {...this.props}
                    onValueChange={(value) => this.setState({value: value})} />
            </View>
        );
    },
});

var SlidingCompleteExample = React.createClass({
    getInitialState: function(){
        return {
            slideCompletionValue: 0,
            slideCompletionCount: 0,
        };
    },

    render: function() {
        return (
            <View>
                <SliderExample
                    {...this.props}
                    onSlidingComplete={(value) => this.setState({
                        slideCompletionValue: value,
                        slideCompletionCount: this.state.slideCompletionCount + 1})} />
                <Text>
                    Completions: {this.state.slideCompletionCount} Value: {this.state.slideCompletionValue}
                </Text>
            </View>
        );
    }
});

var helloworld = React.createClass({
    render: function(){
        return(
            <View>
                <SliderExample />
                <SliderExample value={0.5} />
                <SliderExample minimumValue={-1} maximumValue={2}/>
                <SliderExample step={0.25} />
                <SlidingCompleteExample />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    slider:{
        height: 10,
        width: 10,
    },
    text:{
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
    },
});

AppRegistry.registerComponent('helloworld', () => helloworld);