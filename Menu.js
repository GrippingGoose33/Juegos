import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import './styles.js';
import Box from './Box';
import objetos from './objetos';


function Store({navigation}) {

    return (
        <View style = {styles.root}>
            <ScrollView>
            <View style = {styles.containerBox}>
                {
                objetos.map((objetos, v)=> (
                    <Box key={v}
                    img = {objetos.img}
                    id = {objetos.id}
                    description = {objetos.description}
                    stock = {objetos.stock}
                    title = {objetos.title}
                />
                
                ))
                }
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F50C76'
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

})

export default Store;