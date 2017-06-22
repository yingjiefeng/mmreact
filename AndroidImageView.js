import React, { Component, PropTypes } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class AndroidImageView extends Component {
    // static propTypes = {
    //     title: PropTypes.string.isRequired, <Text>{ this.props.title }</Text>
    // }
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );

    }
}
