"use strict"

import PropTypes from 'prop-types';
{ ViewPropTypes } from ‘react-native’
import { requireNativeComponent, View } from 'react-native';

module.exports = requireNativeComponent('RNTBgImage', {
	name: 'RNTBgImage',
	propTypes: {
		drawable: PropTypes.string,
		...ViewPropTypes // include the default view properties
	}
});
