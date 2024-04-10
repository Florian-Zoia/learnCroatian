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
import { getData } from '../../storage/getData';
import { styles } from '../stylesheets/categoryPicker';
import { FlatList } from 'react-native';

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
            </View>
        );
    }
}



export default Index;