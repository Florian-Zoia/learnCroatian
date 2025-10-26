import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { audiofiles } from '../storage/audio';

import { FlatList } from 'react-native';
import { Card, Icon, Image, Text, TouchableOpacity } from 'react-native-ui-lib';

import { styles } from '../stylesheets/play_sound';

class Play_Sound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaying: '',
      pause: false 
    };
  }

  async componentDidMount() {
    await TrackPlayer.setupPlayer();
  }

  titles = ['Alle abspielen', ...Object.keys(audiofiles)];

  play_sound = async (topic) => {
    await TrackPlayer.reset();

    if (topic === 'Alle abspielen') {
      for (let i = 1; i < this.titles.length; i++) {
        await TrackPlayer.add(audiofiles[this.titles[i]].map((file => ({ url: file }))));
      }
    } else {
      await TrackPlayer.add(audiofiles[topic].map((file) => ({ url: file })));
    }

    await TrackPlayer.play();

    this.setState({ currentPlaying: topic, pause: true });
  };

  stop_sound = async () => {
    await TrackPlayer.pause()
    this.setState({ currentPlaying: '', pause: false  })
  }

  pause_sound = async () => {
    await TrackPlayer.pause()
    this.setState({pause: false})
  }

  resume_sound = async () => {
    await TrackPlayer.play()
    this.setState({pause: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.titles}
          renderItem={({ item }) => (
            <Card
              onPress={() => {
                this.state.currentPlaying === item
                  ? this.stop_sound()
                  : this.play_sound(item)
              }}
              flex
              style={styles.card}
            >
              <View style={styles.textView} >
                <Text style={styles.text}>{item}</Text>
              </View>
              <View style={styles.imageView} >
                <Image
                  // source={require('../icons/play.png')}
                  source={
                    this.state.currentPlaying === item
                      ? require('../icons/stop.png') // wenn aktuell -> pause icon
                      : require('../icons/play.png')  // sonst play icon
                  }
                  style={styles.image}
                />
              </View>
            </Card>
          )}

        />
        <Card style={styles.bottomCard}>
          {/* <View style={{ width: '40%' }}>

          </View> */}
          <TouchableOpacity style={styles.playButtonView}
            onPress={() => {this.state.pause
              ? this.pause_sound()
              : this.resume_sound()
            }} 
            >
            <Image
              source={
                this.state.pause
                  ? require('../icons/pause.png') // wenn aktuell -> pause icon
                  : require('../icons/play.png')  // sonst play icon
              }
              style={styles.playButtonImage}
            />
          </TouchableOpacity>
          {/* <View style={{ width: '40%' }}>

          </View> */}
        </Card>
      </View>
    );
  }
}

export default Play_Sound;
