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
import { TouchableOpacity } from 'react-native';

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
                <Card height={'66%'} width={'88%'} activeOpacity={1} onPress={() => this.props.updateGuess(!this.props.guess)}>
                    <Card.Section
                        bg-$backgroundElevated
                        padding-20
                        flex-4
                        content={[{ text: this.props.croatianWord, text20BL: true, $textDefault: true, color: '#121212' }]}
                        contentStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        style={{backgroundColor: '#b3b3b3'}}
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
                        content={[{ text: this.props.croatianWord, text20BL: true, $textDefault: true, color: '#121212' }]}
                        contentStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1 }}
                        style={{backgroundColor: '#b3b3b3'}}
                    />
                    <Card.Section
                        bg-$backgroundElevated
                        flex-2
                        content={[{ text: this.props.germanWord, text20BL: true, $textDefault: true, color: '#121212' }]}
                        contentStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        style={{backgroundColor: '#b3b3b3'}}
                    />
                    <View
                        row
                        flex
                    >
                        <TouchableOpacity style={{ flex: 1, backgroundColor: '#b3b3b3' }} onPress={() =>
                            this.props.wrongWord()
                        }>
                            <Card.Section
                                flex
                                row
                                bg-$outlineDefault
                                imageSource={ex}
                                imageStyle={{ display: 'flex', flex: 0.66, height: '100%', width: '100%', marginLeft: 40 }}
                                style={{ borderRightWidth: 1, borderTopWidth: 1, borderColor: 'black', borderCurve: 0, backgroundColor: '#b3b3b3' }}
                            
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, backgroundColor: '#b3b3b3' }} onPress={() =>
                            this.props.correctWord()
                        }>
                            <Card.Section
                                flex
                                row
                                bg-$outlineDefault
                                imageSource={check}
                                imageStyle={{ display: 'flex', flex: 0.66, height: '100%', width: '100%', marginLeft: 40 }}
                                style={{ borderLeftWidth: 1, borderTopWidth: 1, borderColor: 'black', borderRadius: 0, backgroundColor: '#b3b3b3' }}
                            />
                        </TouchableOpacity>
                    </View>
                </Card>
            )
        }
    }
}

Vocabulary.propTypes = {
    guess: PropTypes.bool.isRequired,
    germanWord: PropTypes.string.isRequired,
    croatianWord: PropTypes.string.isRequired
}