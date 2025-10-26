// service.js
import TrackPlayer from 'react-native-track-player';

module.exports = async function() {
  // Event-Handler registrieren, auch wenn du nichts machst
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  });
};
