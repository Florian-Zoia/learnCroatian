
import { StyleSheet } from 'react-native';
import {Spacings, BorderRadiuses } from 'react-native-ui-lib';

export const styles = StyleSheet.create({
    list: {
      paddingTop: Spacings.s5
    },
    itemImage: {
      width: '100%',
      height: 85,
      borderRadius: BorderRadiuses.br10
    },
    text: {
      textAlign: 'center',
      color: '#FFFFFF'
    },
    view5050: {
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#181818'
    },
    cardView: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      marginTop: '2%'
    },
    button_absolute: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#404040'
    },
    touchableOpacity: {
      width: '100%',
      height: '100%',
      backgroundColor: '#121212',
      
    },
    textsecondary: {
      color: '#B3B3B3'
    },
    card: {
      backgroundColor: '#404040',
    },
    modal: {
      backgroundColor: '#121212'
    },
    button: {
      backgroundColor: '#404040'
    }
  
  });