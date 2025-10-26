import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',   // volle Breite
        padding: 10,     // bisschen Abstand innen 
        margin: 10,
        minHeight: 80,
        marginRight: 5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    textView: {
        display: 'flex',
        flex: 1,
        width: '66%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18
    },
    imageView: {
        display: 'flex',
        flex: 1,
        width: '33%'
    },
    image: {
        height: '80%',
        width: '100%',
        objectFit: 'scale-down',
    },
    bottomCard: {
        position: 'absolute',
        bottom: 20,      // Abstand vom unteren Rand
        left: 20,
        right: 20,
        padding: 15,
        backgroundColor: '#fff',
        elevation: 4,    // Schatten (Android)
        shadowColor: '#000', // Schatten (iOS)
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    playButtonView: {
        width: '20%',
        alignContent: 'center',
        marginLeft: 30
    },
    playButtonImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }
})