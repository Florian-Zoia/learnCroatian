import React, { Component } from 'react';
import { Dimensions, FlatList, Keyboard, Pressable, StyleSheet } from 'react-native';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  TextField,
} from 'react-native-ui-lib';
import { storeData } from '../../storage/storeData';
import { getData } from '../../storage/getData';

import {
  TouchableWithoutFeedback
} from 'react-native';
import { Icon } from 'react-native-elements';

import { styles } from '../stylesheets/dialog';

const testSentence = [
  {
    croatian: 'aa',
    german: 'bb',
    title: 'Test',
    id: 0
  }
]

class Dialog extends Component {
  state = {
    conversations: [],
    isLoading: true,
    convo: {},
    modalVisible: false,
    croatian: "",
    german: "",
    title: "",
    titles: []
  }

  getHighestId(arr) {
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

  async componentDidMount() {
    this.setState({
      conversations: await getData('conversations'),
      isLoading: false
    })
    this.state.conversations.map((item) => {
      if (this.props.route.params.title === item.title) {
        this.setState({
          convo: item
        })
      } else {
        this.setState({
          convo: this.state.conversations[0]
        })
      }
      if (this.state.titles.indexOf(item.title) == -1) {
        this.state.titles.push(item.title)
      }
    })
  }

  async addConversation() {
    const convoArray = await getData('conversations')
    const convoToAdd = {croatian: "", german: "", title: "", id: 0}

    convoToAdd.croatian = this.state.croatian;
    convoToAdd.german = this.state.german ;
    convoToAdd.title = this.state.title;
    convoToAdd.id = this.getHighestId(convoArray)["id"] + 1;
    convoToAdd.showCroatian = true ;
    convoToAdd.showGerman = true ;

    convoArray.push(convoToAdd)
    storeData(convoArray, 'conversations')
    this.setState({
      modalVisible: !this.state.modalVisible,
      conversations: convoArray
    })
    this.state.conversations.map((item) => {
      if (this.state.titles.indexOf(item.title) == -1) {
        this.state.titles.push(item.title)
      }
    })
  }

  render() {
    if (this.state.isLoading) {
      return <View><Text>
        Loading...
      </Text></View>
    }
    { { console.log('lalala'); } }
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.viewContainer}>
          <FlatList
            style={styles.flatListstyle}
            // inverted={true}
            data={[this.state.convo]}
            renderItem={({ item }) => (
              <View style={styles.viewContainer}>
                <View>
                  <View
                    style={styles.speechBubbleLeft}
                  >
                    <Text
                      style={styles.primaryText}
                    >
                      {item.croatian}
                    </Text>

                  </View>
                </View>
                <View
                  style={styles.speechBubbleRight}
                >
                  <Text
                    style={styles.primaryText}
                  >
                    {item.german}
                  </Text>
                </View>
              </View>
            )}
          />
          <View
            style={styles.button_view}
          >
            <Button
              label={'+'}
              labelStyle={styles.button_text}
              round
              size={Button.sizes.small}
              style={styles.button_add}
              onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}
            />
          </View>
          <Modal
            visible={this.state.modalVisible}>
            <TouchableOpacity activeOpacity={1} flex paddingH-25 paddingT-120 center style={styles.modal} onPress={() => Keyboard.dismiss()}>
              <TextField
                marginT-20
                style={styles.text}
                text20
                floatingPlaceholder
                placeholder="Deutsch"
                onChangeText={(german) => this.setState({ german })} />
              <TextField
                marginT-20
                style={styles.text}
                text20
                floatingPlaceholder
                placeholder="Kroatisch"
                onChangeText={(croatian) => this.setState({ croatian })} />
              <TextField
                marginT-20
                text20
                floatingPlaceholder
                style={styles.text}
                placeholder="Kategorie"
                onChangeText={(title) => this.setState({ title })}
                value={this.state.title}
              />
              <FlatList
                data={this.state.titles}
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
                  onPress={() => this.addConversation()} />
                <Button
                  style={styles.button}
                  labelStyle={styles.text}
                  text70
                  label="Abbrechen"
                  onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} />
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Dialog;