import React, { Component } from 'react';
import { Dimensions, FlatList, Keyboard, Pressable, StyleSheet, TouchableHighlightBase } from 'react-native';
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

import  { useState, useEffect } from 'react';
import {

  
  Image,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';

const testSentence = [
{
    croatian: 'aa',
    german: 'bb',
    id: 0
}
]

class Dialog extends Component {
    // state = {

    // }

    render() {
        {{console.log('lalala');}}
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={styles.container}>
                <FlatList
                  style={{ backgroundColor: '#f2f2ff' }}
                  inverted={true}
                  data={testSentence}
                  renderItem={({ item }) => (
                    <TouchableWithoutFeedback>
                      <View style={{ marginTop: 6 }}>
                        <View
                          style={{
                            maxWidth: Dimensions.get('screen').width * 0.8,
                            backgroundColor: '#3a6ee8',
                            alignSelf:
                              'flex-start',
                            marginHorizontal: 10,
                            padding: 10,
                            borderRadius: 8,
                            borderBottomLeftRadius:
                              0,
                            borderBottomRightRadius:
                              8,
                          }}
                        >
                          <Text
                            style={{
                              color: '#fff', 
                              fontSize: 16,
                            }}
                          >
                            {item.croatian}
                          </Text>
                         
                        </View>
                      </View>
                      <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor: '#3a6ee8',
                    alignSelf:
                       'flex-end',
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                       8,
                    borderBottomRightRadius:
                       0 ,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                    }}
                  >
                    {item.german}
                  </Text>
                  </View>
                    </TouchableWithoutFeedback>
                  )}
                />
                
        

              </View>
            </TouchableWithoutFeedback>
          );
    }
}

const styles = StyleSheet.create({
    headerLeft: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
    container: {
      flex: 1,
      backgroundColor: '#f2f2ff',
    },
    messageInputView: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 14,
      backgroundColor: '#fff',
      borderRadius: 4,
    },
    messageInput: {
      height: 40,
      flex: 1,
      paddingHorizontal: 10,
    },
    messageSendView: {
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
  });

export default Dialog;