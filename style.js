import { StyleSheet, Dimensions } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width * 0.9;
const MAX_HEIGHT = Dimensions.get('window').height * 0.9;

const carlos = Dimensions.get('window').width * 0.7;
const maria = Dimensions.get('window').height * 0.428;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFDEAD',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,

    },
    image: {
        height: '340px',
        width: '350px',
        resizeMode: 'cover',
        margin: 10,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 2, 
        marginTop:-20    

    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        //fontfamily: "Arial, sans-serif;", 
    },
    sinopse: {
        color: 'black',
        fontSize: 16,
        fontStyle:'italic',
        textAlign: "justify",
        position: 'absolute',
        left: 12,
        right:12,
        top: 5
    },
    button: {
        height: 40,
        backgroundColor: '#DAA520',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: maria,
        borderColor: 'black',
        borderWidth: 2,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    desc:{
        backgroundColor: '#DEB887',
        marginTop: 20,
        height: carlos,
        width: maria,
        borderRadius: 10,
        marginBottom:-30
    }

})

export default styles;