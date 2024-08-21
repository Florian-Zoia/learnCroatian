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
import { styles } from '../stylesheets/voc';

import Vocabulary from '../modules/vocabularyModule';

class Abfrage extends Component {
    state = {
        guess: true,
        test: false
    };

    render() {
        return (
            <View
                flex>
                <View
                    flex-1
                    bg-$backgroundDangerHeavy>

                </View>
                <View
                    flex-3
                    bg-$backgroundDarkActive
                    style={styles.vocabularView}
                >
                    <Vocabulary guess={this.state.guess} />
                </View>
            </View>
        )
    }
}

export default Abfrage;