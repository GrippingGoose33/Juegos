import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import './styles.js';
import Box from './Box';
import manager from './manager';


function Store({navigation}) {

    return (
        <View style = {styles.root}>
            <ScrollView>
            <View style = {styles.containerBox}>
                {
                manager.map((manager, v)=> (
                    <Box key={v}
                    img = {manager.img}
                    id = {manager.id}
                    description = {manager.description}
                    stock = {manager.stock}
                    title = {manager.title}
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
        backgroundColor: '#0CCBF5'
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

})

export default Store;