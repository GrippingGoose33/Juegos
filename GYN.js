import React, {useState} from 'react';
import { StyleSheet, View, Button, Text, TextInput} from 'react-native';
import List from './List';

function mapItems(items){
    return items.map((value, i) => ({kay:i.toString(), value}));
}

function generateRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min) + 1);
}

function GYN(props) {
    const [message, setMessage] = useState('');
    const [guessList, setGuessList] = useState([]);
    const [count, setCount] = useState(0);
    const [max, setMax] = useState(100);
    const [min, setMin] = useState(1)
    const random = generateRandomNumber(max, min);
    const [win, setWin] = useState(false);

    const handleOnPress = () =>{
        const numRand = parseInt(random);
        const value = parseInt(value);
        const text = calculateText(num, numRand);

        if (value === 1) {
            setMin(numRand);
        }

        if (value === 2) {
            setMax(numRand);
        }
        
        if (value === 3) {
            setWin(true);
        }
        
        setNumber("");
        setMessage(text);
        setGuessList([
            numRand,
            ...guessList
        ]);
        setCount(count + 1);


        random = generateRandomNumber(max, min);
    }

    return (
        <View style={styles.game}>

            <Text>Tu numero es {random}?</Text>

            <Button
                title="Mayor"
                onPress={handleOnPress}
                value ={1}
            />
            <Button
                title="Menor"
                onPress={handleOnPress}
                value = {2}
            />
            <Button
                title="Correcto"
                onPress={handleOnPress}
                value = {3}
            />

            <List data={mapItems(guessList)}/>
        </View>
    );
}

export default GYN;

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