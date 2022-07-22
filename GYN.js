import React, {useState} from 'react';
import { StyleSheet, View, Button, Text, TextInput} from 'react-native';

function generateRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min) + 1);
}

function GYN(props) {
    const [number, setNumber] = useState('');   
    let [max, setMax] = useState(0);
    let [min, setMin] = useState(1);
    const [win, setWin] = useState(false);
    let random = generateRandomNumber(max, min);

    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnPress = () =>{
        const numRand = parseInt(random);
        const num =parseInt(number);

        if (num === 1) {
            setMin(numRand);
        }

        if (num === 2) {
            setMax(numRand);
        }
        
        if (num === 3) {
            setWin(true);
        }
        
        setNumber("");

        random = generateRandomNumber(max, min);
    }

    return (
        <View style={styles.game}>

            <Text>Tu numero es {random}?</Text>

            <Text>1=Mayor, 2=Menor, 3=Correcto</Text>

            <TextInput
                style={styles.input}
                autoFocus
                placeholder="Guess Your Number"
                onChangeText = {handleOnChange}
                defaultValue = {number}
            />

            <Button
                title="Seguir"
                onPress={handleOnPress}
            />
            {
                win?
                    <Text>
                        Tu numero era {random}
                    </Text>
                    :
                    <Text></Text>
            }
        </View>
    );
}

export default GYN;

const styles = StyleSheet.create({
    game: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        width: 400,
        backgroundColor: 'green'
    },

    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10
    }
})