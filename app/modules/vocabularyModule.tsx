import React, { Component } from 'react';
import {
    View,
    Text,
    Card,
    GridList,
    GridListProps,
    Image
} from 'react-native-ui-lib';

import PropTypes from 'prop-types';

const check = require('../icons/check.png');
const ex = require('../icons/cross-button.png');

// import { styles } from '../stylesheets/typePickerSheet';

export default class Vocabulary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.guess) {
            return (
                <Card height={'66%'} width={'88%'} activeOpacity={1} >
                    <Card.Section
                        bg-$backgroundDangerHeavy
                        flex
                        content={[
                            { text: 'Vocabulary', text60: true, $textDefaultLight: true }
                        ]}
                        contentStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    />
                    <Card.Section
                        bg-$backgroundElevated
                        padding-20
                        flex-4
                        content={[{ text: 'All site', text20BL: true, $textDefault: true, }]}
                        contentStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    />
                </Card>
            )
        } else {
            return (
                <Card height={'66%'} width={'88%'} activeOpacity={1} >
                    <Card.Section
                        bg-$backgroundElevated
                        flex-2
                        padding-10
                        content={[{ text: 'All site', text20BL: true, $textDefault: true, }]}
                        contentStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1 }}
                    />
                    <Card.Section
                        bg-$backgroundElevated
                        flex-2
                        content={[{ text: 'All site', text20BL: true, $textDefault: true, }]}
                        contentStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    />
                    <View
                        row
                        flex-2
                    >
                        <Card.Section
                            flex
                            row
                            bg-$outlineDefault
                            imageSource={ex}
                            imageStyle={{ display: 'flex', flex: 0.66, height: '100%', width: '100%', marginLeft: 40 }}
                            style={{ borderRightWidth: 1, borderTopWidth: 1, borderColor: 'black', borderCurve: 0 }}
                        />
                        <Card.Section
                            flex
                            row
                            bg-$outlineDefault
                            imageSource={check}
                            imageStyle={{ display: 'flex', flex: 0.66, height: '100%', width: '100%', marginLeft: 40 }}
                            style={{ borderLeftWidth: 1, borderTopWidth: 1, borderColor: 'black', borderRadius: 0 }}
                        />
                    </View>
                </Card>
            )
        }
    }
}

Vocabulary.propTypes = { guess: PropTypes.bool.isRequired }