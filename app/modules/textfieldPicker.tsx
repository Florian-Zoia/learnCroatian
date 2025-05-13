import React, { Component } from 'react';
import {
    View,
    Text,
    Card,
    GridList,
    GridListProps,
    TextField,
    Image,
    Button,
    TouchableOpacity
} from 'react-native-ui-lib';

import { FlatList, Keyboard, Pressable, StyleSheet, TouchableHighlightBase } from 'react-native';

import PropTypes from 'prop-types';

const check = require('../icons/check.png');
const ex = require('../icons/cross-button.png');

// import { styles } from '../stylesheets/typePickerSheet';

import { styles } from '../stylesheets/vocabulary';

export default class TextfieldPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
            showList: false,
            textValue: ''
        }
    }

    handleTextChange = (textValue) => {
        console.log(textValue)
        this.setState({ textValue });
        if (this.props.onValueChange) {
            this.props.onValueChange(textValue);  // Notify parent component
        }
    };

    render() {
        return (
            <TouchableOpacity flex-1 onPress={() => this.setState({ showList: false })}>
                <TextField
                    marginT-20
                    text20
                    floatingPlaceholder
                    value={this.props.value}
                    style={styles.text}
                    placeholder={this.props.TextfieldLabel}
                    onChangeText={this.handleTextChange}
                />
                {this.state.showList ? <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => this.handleTextChange(item)}>

                            <Text
                                style={styles.textsecondary}
                            >
                                {item}
                            </Text>
                        </Pressable>
                    )}
                /> : <Button
                    style={styles.button}
                    labelStyle={styles.text}
                    text70
                    label={this.props.ButtonLabel}
                    onPress={() => this.setState({ showList: true })} />}
            </TouchableOpacity>
        )
    }
}

TextfieldPicker.propTypes = {
    list: PropTypes.array.isRequired,
    TextfieldLabel: PropTypes.string.isRequired,
    ButtonLabel: PropTypes.string.isRequired,
    onValueChange: PropTypes.func,
    value: PropTypes.string.isRequired
}