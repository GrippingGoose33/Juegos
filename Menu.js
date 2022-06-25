import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import './styles.js';
import Box from './Box';
import GMN from './GMN';
import GYN from './GYN';
import PPT from './PPT';    
import manager from'./manager';


function Store({navigation}) {

    return (
        <View style = {styles.root}>
            <ScrollView>
            <View style = {styles.containerBox}>
                <View style={styles.root2}>
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
                <View style={styles.root2}>
                <Text style={styles.text}>{manager.title}</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{uri:img}}
                />
                <Text>{description}</Text>
                <Button
                    color="#455q64"
                    title={title}
                    onPress={() => navigation.navigate( GYN )}
                />
                </View>
                <View style={styles.root2}>
                <Text style={styles.text}>{manager.title}</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{uri:img}}
                />
                <Text>{description}</Text>
                <Button
                    color="#455q64"
                    title={title}
                    onPress={() => navigation.navigate( PPT )}
                />
                </View>
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

    root2: {
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

export default Store;