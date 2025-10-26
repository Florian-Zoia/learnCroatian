import React, { Component } from 'react';
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
} from 'react-native-ui-lib';
import { getData } from '../storage/getData';
import { styles } from '../stylesheets/categoryPicker';
import { FlatList } from 'react-native';

import { words } from '../storage/words';

class CategoryPicker extends Component {
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
        alreadyUsed: [],
        categories: ["greeting", "question", "common", "request", "direction"],
        nextScreen: []
    };

    async componentDidMount() {
        // storeData([])
        this.setState({
            isLoading: false,
            // words: await getData('my-key')
            words: words
        })
        // this.state.words.map((item) => {
        //     if (this.state.categories.indexOf(item.category) == -1) {
        //         this.state.categories.push(item.category)
        //     }
        // })
        // if (this.state.words.length < 1) {
        //     this.props.navigation.navigate('Abfrage')
        // }
        this.props.navigation.addListener(
            'didFocus',
            payload => {
                this.forceUpdate();
            }
        );
    };

    switchScreen(category, usage: String) {
        console.log(usage)
        if (usage === 'difficulty') {
            let filteredWords = [];
            console.log(category)
            // console.log(this.state.words)
            if (category == 'Einfach') {
                    filteredWords = this.state.words.filter(item => item.difficulty < 1.3);
                } else if (category == 'Medium') {
                    filteredWords = this.state.words.filter(item => item.difficulty < 2.6 && item.difficulty > 1.3);
                } else if (category == 'Schwer') {
                    filteredWords = this.state.words.filter(item => item.difficulty > 2.6);
                }
                this.setState({
                    nextScreen: [filteredWords]
                })
                console.log('########')
                console.log(filteredWords)
                console.log(this.state.nextScreen)
                this.props.navigation.navigate('Abfrage', { category: category, words: this.randomize(filteredWords.slice(0, 20)) })

        } else {
            console.log(category)
            const filteredWords = this.state.words.filter(item => item.category == category)
            // this.setState({
            //     nextScreen: [filteredWords]
            // })
            console.log('########~~~~')
            console.log(filteredWords)
            // console.log(this.state.nextScreen)
            this.props.navigation.navigate('Abfrage', { category: category, words: this.randomize(filteredWords.slice(0, 20)) })
        }

    }

    randomize(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array;
    }

    renderItem: GridListProps<(typeof this.state.words)>['renderItem'] = ({ item }) => {
        return (
            <View style={styles.cardView}>
                <Card
                    // onPress={() => this.props.navigation.navigate('Abfrage', { category: item, words: this.state.words })}
                    onPress={() => this.switchScreen(item)}
                    marginR-5
                    height={50}
                    flex
                    style={styles.card}>
                    <View padding-s2 >
                        <Text style={styles.text}>
                            {item}
                        </Text>
                    </View>
                </Card>
            </View>
        );
    };

    render() {
        if (this.state.isLoading) {
            return <View><Text>
                Loading...
            </Text></View>
        }
        return (
            <View style={styles.touchableOpacity}>
                {/* <GridList<(typeof this.state.categories)[0]>
                    // ListHeaderComponent={() => this.renderHeader()}
                    data={this.state.categories}
                    renderItem={this.renderItem}
                    numColumns={1} 
                    // maxItemWidth={140}  
                    itemSpacing={Spacings.s2}
                    listPadding={Spacings.s5}
                    // keepItemSize
                    contentContainerStyle={styles.list}
                /> */}
                {/* {this.state.categories.map((item) => {
                    return (
                        <View>
                        <Text>{data}</Text>
                        </View>
                    )
                })} */}
                <FlatList
                    data={this.state.categories}
                    renderItem={({ item }) => (
                        <View style={styles.cardView}>
                            <Card
                                // onPress={() => this.props.navigation.navigate('Abfrage', { category: item, words: this.state.words })}
                                onPress={() => this.switchScreen(item, 'category')}
                                marginR-5
                                height={50}
                                flex
                                style={styles.card}>
                                <View padding-s2 >
                                    <Text style={styles.text}>
                                        {item}
                                    </Text>
                                </View>
                            </Card>
                        </View>

                    )}
                />
                <FlatList
                    data={["Einfach", "Medium", "Schwer"]}
                    renderItem={({ item }) => (
                        <View style={styles.cardView}>
                            <Card
                                // onPress={() => this.props.navigation.navigate('Abfrage', { category: item, words: this.state.words })}
                                onPress={() => this.switchScreen(item, 'difficulty')}
                                marginR-5
                                height={50}
                                flex
                                style={styles.card}>
                                <View padding-s2 >
                                    <Text style={styles.text}>
                                        {item}
                                    </Text>
                                </View>
                            </Card>
                        </View>

                    )}
                />
            </View>
        );
    }
}



export default CategoryPicker;