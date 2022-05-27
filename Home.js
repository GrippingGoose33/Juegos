import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import './styles.js';
import styles from './styles';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textH1}>Videojuegos Moviles</Text>
            <Text style={styles.text}>Encontraras  varios tipos de videojuegos simples aqui</Text>
            <Button 
            title="ir a Menu"
            onPress={() => navigation.navigate('Menu')}
            />
        </View>
    );
}

export default Home;