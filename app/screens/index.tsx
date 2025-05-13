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

import Vocabulary from '../modules/vocabularyModule';
import { storeData } from '../storage/storeData';
import { words } from '../storage/words';



const themes = [
    {
        screen: 'CategoryPicker',
        display: 'Vocabulary'
    },
    {
        screen: 'alphabet_pronounciation',
        display: 'Alphabet & Pronounciation'
    },
    {
        screen: 'Dialog',
        display: 'Dialog'
    }
]

class Index extends Component {
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
        categories: []
    };

    async componentDidMount() {
        // storeData([])
        this.setState({
            isLoading: false
        })
    };

    renderItem: GridListProps<(typeof this.state.words)>['renderItem'] = ({ item }) => {
        return (
            <View style={styles.cardView}>
                <Card
                    onPress={() => this.props.navigation.navigate('Vocabulary', { category: item })}
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
                <FlatList
                    data={themes}
                    renderItem={({ item }) => (
                        <View style={styles.cardView}>
                            <Card
                                onPress={() => this.props.navigation.navigate(`${item.screen}`)}
                                marginR-5
                                height={50}
                                flex
                                style={styles.card}>
                                <View padding-s2 >
                                    <Text style={styles.text}>
                                        {item.display}
                                    </Text>
                                </View>
                            </Card>
                        </View>

                    )}
                />
                <Card
                    onPress={() => storeData(words, 'my-key')}
                    marginR-5
                    // height={10}
                    flex-1
                    style={styles.card}>
                    <View>
                        <Text>
                            Vokabelliste speichern
                        </Text>
                    </View>
                </Card>
            </View>
        );
    }
}



export default Index;