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
import { specificLetters } from '../storage/alphabet_pronounciation';

class Alphabet_pronounciation extends Component {
    state = {
        orientation: Constants.orientation,
        useGridListItem: false,
        isLoading: true,
        data: [],
        modalVisible: false,
        croatianWord: "",
        germanWord: "",
        category: "",
        showCroatian: true,
        showGerman: true,
        alreadyUsed: [],
        categories: []
    }; 

    render() {
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
                    data={specificLetters}
                    renderItem={({ item }) => (
                        <View style={styles.cardView}>
                            <Card
                                // onPress={() => this.props.navigation.navigate('Vocabulary', { category: item })}
                                paddingT-s2
                                // height={50}
                                flex
                                style={styles.card}>
                                {/* <View padding-s2 >
                                    <Text style={styles.text}>
                                        {item.letter}
                                    </Text>
                                </View> */}

                                <Card.Section
                                content={[{text: item.letter, text50BL: true, center: true, color: '#FFFFFF'}]}  
                                
                                />
                                <Card.Section
                                content={[{text: item.pronounciation, text50BL: true, center: true, color: '#B3B3B3'}]}
                                />
                            </Card>
                        </View>

                    )}
                />
            </View>
        );
    }
}



export default Alphabet_pronounciation;