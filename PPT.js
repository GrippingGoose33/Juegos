import React from 'react';
import { StyleSheet, View, Button, Text, TextInput} from 'react-native';
//import Bottom from './Bottom';

function randomGenerator() {
    return Math.floor(Math.random() * (3 - 1) + 1)
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

const rand = randomGenerator();


function PPT() {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    
    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnPress = () =>{
        const num =parseInt(number);
        const numRand = parseInt(random);
        const text = calculateText(num, numRand);

        if (num === numRand) {
            setWin(true);
        }

        setNumber("");
        setMessage(text);

    }

    return (
        <View>
            <TextInput
                placeholder="piedra=1, papel=2, tijera=3"
                onChangeText={handleOnChange}
            />
            <Button
                title="piedra"
            />
            <Button
                title="papel"
            />
            <Button
                title="tijera"
            />
            <Text> {message} </Text>
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
        textAlign: 'center',
        marginBottom: 10
    }
})

export default PPT;