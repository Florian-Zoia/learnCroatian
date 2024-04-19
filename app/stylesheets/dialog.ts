import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#121212'
    },
    flatListstyle: {
        backgroundColor: '#121212',
        height: Dimensions.get('screen').height * 0.66
    },
    speechBubbleLeft: {
        maxWidth: Dimensions.get('screen').width * 0.8,
        backgroundColor: '#404040',
        alignSelf: 'flex-start',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 8
    },
    speechBubbleRight: {
        maxWidth: Dimensions.get('screen').width * 0.8,
        backgroundColor: '#404040',
        alignSelf: 'flex-end',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 0
    },
    primaryText: {
        color: '#FFFFFF',
        fontSize: 18
    },
    button_add: {
        height: 50,
        width: 50, 
        backgroundColor: '#404040'
    },
    button_text: {
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'
    },
    button_view: {
        // height: Dimensions.get('screen').height * 0.2,
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal: {
        backgroundColor: '#121212'
    },
    text: {
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'
    },
    textsecondary: {
        color: '#B3B3B3'
    },
    button: {
        backgroundColor: '#404040',
        marginBottom: 5
    }, 
});
