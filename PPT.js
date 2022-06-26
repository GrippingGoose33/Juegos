import React from 'react';
import {Button, StyleSheet, View, Text, Image} from 'react-native';
//import Bottom from './Bottom';

function Details() {

    return (
        <View>
            <Text> Helluwu </Text>
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