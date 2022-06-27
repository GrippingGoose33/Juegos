import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import './styles.js';
import styles from './styles';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.Logo}
                source={{uri:'https://player8.org/wp-content/uploads/2021/02/mejores-5-juegos-arcade-890x606.jpg'}}
            />
            <Text style={styles.textH1}>Videojuegos Moviles</Text>
            <Button 
            title="ir a Menu"
            onPress={() => navigation.navigate('Menu')}
            />
        </View>
    );
}

export default Home;