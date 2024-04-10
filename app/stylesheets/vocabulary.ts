import { Spacings, BorderRadiuses } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';

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
        alignContent: 'center',
        justifyContent: 'center',
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
    },
    cardViewSentece: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
    },
    button_absolute: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#404040'
    },
    button_absolute2: {
        position: 'absolute',
        bottom: 20,
        right: 70,
        backgroundColor: '#404040'
    },
    button_absolute3: {
        position: 'absolute',
        bottom: 20,
        right: 120,
        backgroundColor: '#404040'
    },
    button_absolute4: {
        position: 'absolute',
        bottom: 20,
        right: 170,
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
    cardL: {
        backgroundColor: '#404040',
        marginRight: 5
    },
    cardLItem: {
        backgroundColor: '#404040',
        marginRight: 5,
        width: '33%',
        justifyContent: 'center',
        textAlign: 'center'
    },
    cardT: {
        backgroundColor: '#404040',
        marginTop: 2
    },
    cardR: {
        backgroundColor: '#404040',
        marginLeft: 5
    },
    cardRItem: {
        backgroundColor: '#404040',
        marginLeft: 5,
        width: '66%'
    },
    cardD: {
        backgroundColor: '#404040',
        marginTop: 5
    },
    modal: {
        backgroundColor: '#121212'
    },
    itemModal: {
        backgroundColor: '#121212'
    },
    itemView: {
        backgroundColor: '#121212',
        flexDirection: 'row',
        height: '5%',
        width: '75%',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#404040',
        marginBottom: 5
    }, 
    itemTextView: {
        backgroundColor: '#404040',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center', 
        alignItems: 'center'
    },
    buttonIconStyle: {
        // resizeMode: '',
        objectFit: 'scale-down',
        // width: '25%',
        // height: '25%'
    }
});