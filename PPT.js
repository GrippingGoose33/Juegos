import React, {useState} from 'react';
import { StyleSheet, View, Button, Text, TextInput} from 'react-native';
//import Bottom from './Bottom';

function randomGenerator(max, min) {
    return Math.floor(Math.random() * (max - min) + 1)
}

function calculateText(number, random) {

    if(number === random){
        return "Empate"
    }
    if(number === 1 && random === 2){
        return "Perdiste"
    }
    if(number === 1 && random === 3){
        return "Ganaste"
    }
    if(number === 2 && random === 3){
        return "Perdiste"
    }
    if(number === 2 && random === 1){
        return "Ganaste"
    }
    if(number === 3 && random === 1){
        return "Perdiste"
    }
    if(number === 3 && random === 2){
        return "Ganaste"
    }
}

const rand = randomGenerator(3, 1);


function PPT() {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const numRand = parseInt(rand);

    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnPress = () =>{
        const num =parseInt(number);
        const text = calculateText(num, numRand);

        setNumber("");
        setMessage(text);
    }

    return (
        <View style={styles.game}>
            <TextInput
                style={styles.input}
                autoFocus
                placeholder="Guess My Number"
                onChangeText = {handleOnChange}
                defaultValue = {number}
            />
            <Button
                title="Continuar"
                onPress={handleOnPress}
            />
            <Text style={styles.texto}> {message} </Text>
            <Text>{rand}</Text>
            
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
        textAlign: "center",
        marginBottom: 10
    },

    texto:{
        textAlign:"center",
        fontSize: 15
    }
})

export default PPT;