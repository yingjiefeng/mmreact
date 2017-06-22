// ImageView.js

import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
    name: 'ImageView',
    propTypes: {
        src: PropTypes.string,
        borderRadius: PropTypes.number,
        resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
        ...View.propTypes // include the default view properties
    },
};

//module.exports = requireNativeComponent('RCTImageView', iface);
module.exports = requireNativeComponent('RCTRCTImageView', iface, {nativeOnly:{
    'scaleX': true,
    'scaleY': true,
    'testID': true,
    'decomposedMatrix': true,
    'backgroundColor': true,
    'accessibilityComponentType': true,
    'renderToHardwareTextureAndroid': true,
    'translateY': true,
    'translateX': true,
    'accessibilityLabel': true,
    'accessibilityLiveRegion': true,
    'importantForAccessibility': true,
    'rotation': true,
    'opacity': true,
}});