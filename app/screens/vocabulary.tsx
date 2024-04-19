import React, { Component } from 'react';
import { FlatList, Keyboard, Pressable, StyleSheet, TouchableHighlightBase } from 'react-native';
import {
    View,
    Text,
    Constants,
    GridList,
    Card,
    Spacings,
    GridListProps,
    Button,
    TouchableOpacity,
    Modal,
    TextField,
    Assets
} from 'react-native-ui-lib';
import { storeData } from '../../storage/storeData';
import { getData } from '../../storage/getData';
import { Word } from '../../storage/models';
import { styles } from '../stylesheets/vocabulary';

const randomIcon = require('../icons/shuffle.png');  


class Vocabulary extends Component {
    state = {
        orientation: Constants.orientation,
        useGridListItem: false,
        isLoading: true,
        words: [],
        modalVisible: false,
        croatianWord: "",
        germanWord: "",
        category: "",
        showCroatian: true,
        showGerman: true,
        categories: [],
        currentItem: {},
        itemModalVisible: false,
        wordCategory: []
    };

    async componentDidMount() {
        //Die folgende Zeile kann genutzt werden, um den Speicher frei zu räumen
        // storeData([]) 
        this.setState({
            isLoading: false,
            words: await getData('my-key')
        })
        this.state.words.map((item) => {
            if (this.state.categories.indexOf(item.category) == -1) {
                this.state.categories.push(item.category)
            }
            if (item.category == this.props.route.params.category) {
                this.state.wordCategory.push(item)
            }
        })


    };

    test() {
        console.log(this.state.words)
        // for (let i = 0 ; i < this.state.words.length ; i++) {
        //     this.state.words[i]['showGerman'] = true;
        //     this.state.words[i]['showCroatian'] = true; 
        // };
        // storeData(this.state.words) 
        // console.log(this.state.words)
    }

    randomize(array: Word[]) {
        this.setState({isLoading: true })
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        this.setState({
            wordCategory: array
        })
        this.setState({isLoading: false})
        console.log(this.state.wordCategory)
    }

    getHighestId(arr: Word[]) {
        if (arr && arr.length > 0) {
            var max;
            for (var i = 0; i < arr.length; i++) {
                if (max == null || arr[i]["id"] > max["id"])
                    max = arr[i];
            }
            return max;
        } else {
            return { id: -1 }
        }
    }

    async addWord() {
        const wordArray: Word[] = await getData('my-key')
        const WordToAdd: Word = { category: "", croatian: "", german: "", id: 0 };

        WordToAdd.category = this.state.category;
        WordToAdd.croatian = this.state.croatianWord;
        WordToAdd.german = this.state.germanWord;
        WordToAdd.id = (this.getHighestId(wordArray)["id"] + 1)
        WordToAdd.showCroatian = true; 
        WordToAdd.showGerman = true;

        wordArray.push(WordToAdd)
        storeData(wordArray, 'my-key')
        this.setState({ modalVisible: !this.state.modalVisible, words: wordArray, wordCategory: wordArray })
        this.state.words.map((item) => {
            if (this.state.categories.indexOf(item.category) == -1) {
                this.state.categories.push(item.category)
            }
        })
    };

    async deleteWord() {
        console.log(this.state.words.indexOf(this.state.currentItem))
        const index = this.state.words.indexOf(this.state.currentItem)
        if (index != -1) {
            console.log("splice")
            this.state.words.splice(index, 1);
        } else {
            console.log("no splice")
        }
        storeData(this.state.words, 'my-key')
        this.setState({
            itemModalVisible: false,
        })
        this.state.words.map((item) => {
            if (this.state.categories.indexOf(item.category) == -1) {
                this.state.categories.push(item.category)
            }
        })
    };

    renderHeader = () => {
        return (
            <View style={styles.view5050}>
                <Text
                    text60
                    style={styles.textsecondary}>
                    Kroatisch
                </Text>
                <Text
                    text60
                    style={styles.textsecondary}>
                    Deutsch
                </Text>
            </View>
        );
    };

    changeVisibility(item: Word, language: string) {
        console.log(item)
        const index = this.state.wordCategory.indexOf(item)
        let array = this.state.wordCategory
        if (language == 'german') {
            array[index].showGerman = !array[index].showGerman;
        } else if (language == 'croatian'){
            array[index].showCroatian = !array[index].showCroatian;
        }
        this.setState({
            wordCategory: array
        })
    }

    hideVocs(language: string) {
        const array = this.state.wordCategory
        for(let i = 0 ; i < this.state.wordCategory.length ; i++) {
            array[i][language] = !array[i][language]; 
        }
        this.setState({
            wordCategory: array
        })
    }

    renderItems: GridListProps<(typeof this.state.wordCategory)>['renderItem'] = ({ item }) => {
        if (item.category == this.props.route.params.category ) {
            console.log('lessego')
            console.log(item)
            console.log(this.state.wordCategory[this.state.wordCategory.indexOf(item)])
            return (
                // <View style={item.category == "sentences" ? styles.cardViewSentece : styles.cardView}>
                <View style={item.category.toLowerCase() == "sentences" ? styles.cardViewSentece : styles.cardView}>
                    <Card 
                        onLongPress={() => this.setState({ itemModalVisible: !this.state.itemModalVisible, currentItem: item })}
                        flex
                        style={item.category.toLowerCase() == "sentences" ? styles.cardT : styles.cardL}
                        onPress={() => this.changeVisibility(item, 'croatian')}>
                        <View padding-s2>
                            <Text style={styles.text}>
                                {this.state.wordCategory[this.state.wordCategory.indexOf(item)].showCroatian ? item.croatian : "_ _ _ _ _ _ "}
                            </Text>
                        </View>
                    </Card> 
                    <Card 
                        flex
                        style={item.category.toLowerCase() == "sentences" ? styles.cardD : styles.cardR}
                        onPress={() => this.changeVisibility(item, 'german')}
                        onLongPress={() => this.setState({ itemModalVisible: !this.state.itemModalVisible, currentItem: item })}>
                        <View padding-s2>
                            <Text style={styles.text}>
                                {this.state.wordCategory[this.state.wordCategory.indexOf(item)].showGerman ? item.german : "_ _ _ _ _ _"}
                            </Text>
                        </View>
                    </Card>
                    <Modal
                        visible={this.state.itemModalVisible}
                    >
                        <View
                            flex paddingT-120 center style={styles.itemModal}
                        >
                            <View style={styles.itemView}>
                                <Card style={styles.cardLItem}>
                                    <View style={styles.itemTextView}>
                                        <Text style={styles.textsecondary}>
                                            Deutsch
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={styles.cardRItem}>
                                    <View style={styles.itemTextView}>
                                        <Text style={styles.text}>
                                            {this.state.currentItem.german}
                                        </Text>
                                    </View>
                                </Card>
                            </View>

                            <View style={styles.itemView}>
                                <Card style={styles.cardLItem}>
                                    <View style={styles.itemTextView}>
                                        <Text style={styles.textsecondary}>
                                            Kroatisch
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={styles.cardRItem}>
                                    <View style={styles.itemTextView}>
                                        <Text style={styles.text}>
                                            {this.state.currentItem.croatian}
                                        </Text>
                                    </View>
                                </Card>
                            </View>

                            <View style={styles.itemView}>
                                <Card style={styles.cardLItem}>
                                    <View style={styles.itemTextView}>
                                        <Text style={styles.textsecondary}>
                                            Kategorie
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={styles.cardRItem}>
                                    <View style={styles.itemTextView}>
                                        <Text style={styles.text}> 
                                            {this.state.currentItem.category}
                                        </Text>
                                    </View>
                                </Card>
                            </View>

                            <View>
                                <Button
                                    label="Abbrechen"
                                    style={styles.button}
                                    labelStyle={styles.text}
                                    text70
                                    onPress={() => this.setState({ itemModalVisible: !this.state.itemModalVisible })}
                                />
                                <Button
                                    label="Löschen"
                                    style={styles.button}
                                    labelStyle={styles.text}
                                    text70
                                onPress={() => this.deleteWord()}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
            );
        }
    };

    render() {
        if (this.state.isLoading) {
            return <View><Text>
                Loading...
            </Text></View>
        }
        console.log("start")
        return (
            <View style={styles.touchableOpacity}>
                <GridList<(typeof this.state.wordCategory)[0]>
                    ListHeaderComponent={() => this.renderHeader()}
                    data={this.state.wordCategory}
                    renderItem={this.renderItems}
                    numColumns={1}
                    // maxItemWidth={140}
                    itemSpacing={Spacings.s2}
                    listPadding={Spacings.s5}
                    // keepItemSize
                    // contentContainerStyle={styles.list}
                />
                <Modal

                    visible={this.state.modalVisible}>
                    <TouchableOpacity activeOpacity={1} flex paddingH-25 paddingT-120 center style={styles.modal} onPress={() => Keyboard.dismiss()}>
                        <TextField
                            marginT-20
                            style={styles.text}
                            text20
                            floatingPlaceholder
                            placeholder="Deutsch"
                            onChangeText={(germanWord) => this.setState({ germanWord })} />
                        <TextField
                            marginT-20
                            style={styles.text}
                            text20
                            floatingPlaceholder
                            placeholder="Kroatisch"
                            onChangeText={(croatianWord) => this.setState({ croatianWord })} />
                        <TextField
                            marginT-20
                            text20
                            floatingPlaceholder
                            style={styles.text}
                            placeholder="Kategorie"
                            onChangeText={(category) => this.setState({ category })}
                            value={this.state.category}
                        />
                        <FlatList
                            data={this.state.categories}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => this.setState({ category: item })}>

                                    <Text
                                        style={styles.textsecondary}
                                    >
                                        {item}
                                    </Text>
                                </Pressable>
                            )}
                        />
                        <View marginT-50 center>
                            <Button
                                style={styles.button}
                                labelStyle={styles.text}
                                text70
                                label="Hinzufügen"
                                onPress={() => this.addWord()} />
                            <Button
                                style={styles.button}
                                labelStyle={styles.text}
                                text70
                                label="Abbrechen"
                                onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} />
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Button label={'+'}
                    labelStyle={styles.text}
                    round
                    size={Button.sizes.large}
                    style={styles.button_absolute}
                    onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}
                    />
                <Button 
                    iconSource={randomIcon}
                    // labelStyle={styles.text}
                    iconStyle={styles.buttonIconStyle}
                    round
                    size={Button.sizes.small}
                    style={styles.button_absolute2}
                    onPress={() => { this.randomize(this.state.wordCategory) }}
                    />
                <Button 
                    label='D'
                    labelStyle={styles.text}
                    iconStyle={styles.buttonIconStyle}
                    round
                    size={Button.sizes.small}
                    style={styles.button_absolute3}
                    onPress={() => { this.hideVocs('showGerman') }}
                />
                <Button 
                    label='K'
                    labelStyle={styles.text}
                    iconStyle={styles.buttonIconStyle}
                    round
                    size={Button.sizes.small}
                    style={styles.button_absolute4}
                    onPress={() => { this.hideVocs('showCroatian') }}
                />
                {/* This Button is used for testing and new implementations*/}
                {/* <Button 
                    label='Test'
                    // labelStyle={styles.text}
                    // iconStyle={styles.buttonIconStyle}
                    round
                    size={Button.sizes.small}
                    // style={styles.button_absolute2}
                    onPress={() => { this.test() }}
                /> */}
            </View>
        );
    }
}



export default Vocabulary;