import React, { Component } from 'react';

import { Button, ScrollBar, Text, TouchableOpacity, View, } from "react-native-ui-lib"
import { styles } from "../stylesheets/vocabulary"
import createNewWord from '../storage/createWord';
import { storeData } from '../storage/storeData';
import { getData } from '../storage/getData';
import { FlatList, ScrollView } from 'react-native';

import { words } from '../storage/words';

class AddDB extends Component {
    state = {
        words: words,
    }

    addDb = () => {
        var newWords = []
        this.state.words.forEach((item) => {
            newWords = createNewWord(newWords, item.category, item.croatian, item.german, item.wordCategory, item.verb)
        })
        storeData(newWords, 'words')
    }

    async test() {
        this.setState({
            words: await getData('words')
        })
        console.log('words: ' + this.state.words)
    }

    render() { 
        return (
            <View style={{flex: 2}}>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.state.words}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.croatian}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Button
                        style={styles.button}
                        labelStyle={styles.text}
                        text70
                        label="Hinzufügen"
                        onPress={() => (this.addDb())}
                    />
                    <Button
                        style={styles.button}
                        labelStyle={styles.text}
                        text70
                        label="Test"
                        onPress={() => (this.test())}
                    />
                </View>
            </View>
        )
    }
}

export default AddDB;
