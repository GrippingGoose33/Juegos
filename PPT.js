import React from 'react';
import {Button, StyleSheet, View, Text, Image} from 'react-native';
//import Bottom from './Bottom';

function Details({route, navigation}) {

    const {title, id, description, img, stock} = route.params;

    navigation.setOptions({
        title: title,
        headerRight:()=>{
            <Button
                title="Buy"
                onPress={()=>{}}
                disable={stock === 0}
            />
        }
    })

    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "purple"}}>
            <Image
                style={styles.Logo}
                source={{uri:img}}
            />

            <Text>Screen: {id}</Text>
            <Text style= {{fontSize:20, backgroundColor: "white"}}>Producto: {description}</Text>

            <Text style= {{fontSize: 15, color:"blue"}}>En stock: {stock}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DC0CF5",
        borderWidth: 1,
        borderRadius: 0,
        margin: 10,
        color: "blue",
    },

    Logo: {
        width: 180,
        height: 180,
      },
})

export default Details;