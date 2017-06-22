import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class AndroidHelloView extends Component {
    // static propTypes = {
    //     title: PropTypes.string.isRequired, <Text>{ this.props.title }</Text>
    // }
    render() {
        return (

            <Text>{ "地方发生的  " }</Text>
        );
    }
}
