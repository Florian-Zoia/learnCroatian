import React, { Component } from 'react';

import { FlatList, Keyboard, Pressable, StyleSheet, TouchableHighlightBase } from 'react-native';
import {
    View,
    Text,
    Constants,
    GridList,
    Card,
    Spacings,
    BorderRadiuses,
    GridListProps,
    TouchableOpacity,
    TextField,
    Button
} from 'react-native-ui-lib';



import { styles } from '../stylesheets/vocabulary';

import createNewWord from '../storage/createWord';
import { storeData } from '../storage/storeData';

import Vocabulary from '../modules/vocabularyModule';
import TextfieldPicker from '../modules/textfieldPicker';
import { getData } from '../storage/getData';

class AddNew extends Component {
    state = {
        words: [],
        guess: true,
        test: '',
        categories: ['eins', 'zwei', 'drei'],
        category: '',
        wordCategories: ['drei', 'zwei', 'eins'],
        wordCategory: '',
        verbs: ['verb', 'verb', 'verb'],
        verb: '',
        selectedValue: '',
        germanWord: '',
        croatianWord: ''
    }

    handleValueChangeWordKetegory = (value) => {
        this.setState({ wordCategory: value });
    };

    handleValueChangeVerb = (value) => {
        this.setState({ verb: value });
    };

    handleValueChangeKategory = (value) => {
        this.setState({ category: value });
    };

    saveWord = () => {
        var newWords = createNewWord(this.state.words, this.state.category, this.state.croatianWord, this.state.germanWord, this.state.wordCategory, this.state.verb)
        console.log(newWords)
        storeData(newWords, 'my-key')
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} flex center onPress={() => Keyboard.dismiss()} bg-$backgroundDangerLight>
                <TextField
                    marginT-20
                    style={styles.text}
                    text20
                    floatingPlaceholder
                    placeholder="Deutsch"
                    onChangeText={(germanWord) => this.setState({ germanWord: germanWord })} />
                <TextField
                    marginT-20
                    style={styles.text}
                    text20
                    floatingPlaceholder
                    placeholder="Kroatisch"
                    onChangeText={(croatianWord) => this.setState({ croatianWord: croatianWord })} />
                <TextfieldPicker
                    list={this.state.categories}
                    value={this.state.category}
                    TextfieldLabel='Kategorie'
                    ButtonLabel='Kategorien anzeigen'
                    onValueChange={this.handleValueChangeKategory}
                />
                <TextfieldPicker
                    list={this.state.wordCategories}
                    value={this.state.wordCategory}
                    TextfieldLabel='Wortkategorie'
                    ButtonLabel='Wortkategorien anzeigen'
                    onValueChange={this.handleValueChangeWordKetegory}
                />
                <TextfieldPicker
                    list={this.state.verbs}
                    value={this.state.verb}
                    TextfieldLabel='Verbstamm'
                    ButtonLabel='Verben anzeigen'
                    onValueChange={this.handleValueChangeVerb}
                />
                <View marginT-50 center>
                    <Button
                        style={styles.button}
                        labelStyle={styles.text}
                        text70
                        label="Hinzufügen"
                        onPress={() => (this.saveWord())}
                    />
                    <Button
                        style={styles.button}
                        labelStyle={styles.text}
                        text70
                        label="Abbrechen"
                        onPress={() => (console.log('Hier muss noch zurückgegangen werden oder der Button muss weg'))} />
                </View>
            </TouchableOpacity>
        )
    }
}

export default AddNew;