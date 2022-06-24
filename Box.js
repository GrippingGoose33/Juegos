import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import GMN from './GMN';
import GYN from './GYN';
import PPT from './PPT';
import manager from'./manager';

function Box({description, img, id, title}) {

    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <Text style={styles.text}>{manager.title}</Text>
            <Image
                style={styles.tinyLogo}
                source={{uri:img}}
            />
            <Text>{description}</Text>
            <Button
                color="#455q64"
                title={title}
                onPress={() => navigation.navigate( GMN )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8BF50C",
        borderWidth: 1,
        borderRadius: 0,
        margin: 10,
    },

    tinyLogo: {
        width: 80,
        height: 80,
    },

    text: {
        flex: 1,
        alignItems: "center"
    }
})

export default Box;