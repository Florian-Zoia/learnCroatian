import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native-ui-lib';

import * as Progress from 'react-native-progress';

import { styles } from '../stylesheets/voc';

import Vocabulary from '../modules/vocabularyModule';

class Abfrage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            word: [],
            indexWords: 0,
            guess: true,
            rightWords: 0,
            questionedWords: 0,
            myVariable: "Test Value"
        };
    }

    async componentDidMount() {
        this.setState({
            category: this.props.route.params.category,
            word: this.props.route.params.words,
            isLoading: false
        })
        console.log(this.state.word)
        console.log('~~~~~~~~~~~~')
    };

    updateIndex = (newIndex: number) => {
        console.log('indexWords ', this.state.indexWords)
        console.log('newIndex ', newIndex)
        console.log('this.state.word.length ', this.state.word.length)
        if (newIndex > this.state.word.length - 1) {
            this.setState({
                guess: true
            })
        } else {
            this.setState({ indexWords: newIndex })
        }
    }

    updateGuess = (newGuess: boolean) => {
        this.setState({ guess: newGuess })
    }

    correctWord = () => {
        console.log('indexWords ', this.state.indexWords)
        console.log('this.state.word.length ', this.state.word.length)
        if (this.state.indexWords + 1 > this.state.word.length - 1) {
            this.setState({
                guess: true,
                rightWords: this.state.word.length,
                questionedWords: this.state.word.length
            })
        } else {
            this.setState({
                rightWords: this.state.rightWords + 1,
                guess: !this.state.guess,
                indexWords: this.state.indexWords + 1,
                questionedWords: this.state.questionedWords + 1
            })
        }
    }

    wrongword = () => {
        console.log('indexWords ', this.state.indexWords)
        console.log('this.state.word.length ', this.state.word.length)
        if (this.state.indexWords + 1 > this.state.word.length - 1) {
            this.setState({
                guess: true,
                questionedWords: this.state.questionedWords + 1
            })
        } else {
            this.setState({
                guess: !this.state.guess,
                indexWords: this.state.indexWords + 1,
                questionedWords: this.state.questionedWords + 1
            })
        }
    }


    render() {

        const happyIcon = this.state.rightWords / this.state.questionedWords > 0.6
            ? require('../icons/happy-xxl.png')
            : require('../icons/sad-xxl.png');

        if (this.state.isLoading) {
            return <View><Text>
                Loading...
            </Text></View>
        }

        return (
            <View
                flex>
                <View
                    flex-1
                    style={styles.topBackground}>
                    <View
                        flex-1
                        style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            // backgroundColor: 'red',
                            height: '100%',
                            width: '100%',
                            marginLeft: 40
                        }}
                    >
                        <Image
                            source={happyIcon}
                            style={{ display: 'flex', flex: 0.66, height: '100%', width: '100%', objectFit: 'scale-down' }}
                        />
                    </View>
                    <View
                        flex-1
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}
                    >

                        <Text style={styles.progressText}>{this.state.rightWords}/{this.state.word.length}</Text>
                    </View>
                    <View flex-1>
                        <Progress.Circle
                            size={120}
                            indeterminate={false}
                            animated={true}
                            progress={this.state.rightWords / this.state.word.length}
                            direction='clockwise'
                            thickness={7}
                            strokeCap='round'
                            borderWidth={0}
                            color='#121212'
                        />
                    </View>
                </View>
                <View
                    flex-3
                    bg-$backgroundDarkActive
                    style={styles.bottomBackground}
                >
                    <Vocabulary
                        guess={this.state.guess}
                        words={this.state.word}
                        croatianWord={this.state.word[this.state.indexWords].croatian}
                        germanWord={this.state.word[this.state.indexWords].german}
                        indexWords={this.state.indexWords}
                        updateGuess={this.updateGuess}
                        correctWord={this.correctWord}
                        wrongWord={this.wrongword}
                    />
                </View>
            </View>
        )
    }
}

export default Abfrage;