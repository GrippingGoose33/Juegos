import React from 'react';
import { StyleSheet, View, Button, Text,} from 'react-native';
//import Bottom from './Bottom';

function randomGenerator() {
    return Math.floor(Math.random() * (3 - 1) + 1)
}

const rand = randomGenerator();

function PPT() {

    return (
        <View>
            
            <Button
                title="piedra"
            />
            <Button
                title="papel"
            />
            <Button
                title="tijera"
            />
            <Text> {rand} </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    game: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        width: 400
    },

    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10
    }
})

export default PPT;