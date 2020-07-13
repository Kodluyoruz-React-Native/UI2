import { StyleSheet } from 'react-native';
import deviceH from '../helper/deviceH';


const appStyle = StyleSheet.create({
    navContainer: {
        flex: 1,
    }
});


const splashStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c0c7d1',

        justifyContent: 'center',
        alignItems: 'center'
    }
});


const welcomeStyle = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: '#c0c7d1',

        justifyContent: 'center',
        alignItems: 'center'
    },

    caption: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
        color: 'black'
    },
    desc: {
        fontWeight: 'bold',
        color: 'gray'
    },


    input: {
        backgroundColor: 'white',
        width: deviceH.W(85),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: deviceH.W(42.5)
    },

    nextB: {
        backgroundColor: '#087dd1',
        width: deviceH.W(70),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: deviceH.W(35),
        marginTop: 20
    },
    nextBT: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
});


export { appStyle, splashStyle, welcomeStyle };