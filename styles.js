import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",  
        backgroundColor:"red"
    },

    containerBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F50C96',
    },  

    box: {
        width:100,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'stretch',
        borderWidth: 3,
        backgroundColor: 'green',
        margin: 10,
    },  

    textH1: {
        marginBottom: 10,
        fontSize: 30, 
    },

    Logo: {
        width: 360,
        height: 200,
      },

    text: {
        marginBottom: 10,
        fontSize: 15, 
    },
})