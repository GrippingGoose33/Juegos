import React from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';

function randomGenerate(max, min){
    return Math.floor(Math.random() * (max - min) + 1);
}

function textMaker(rand) {
    return `Resiviste ${rand} de daño`
}



function Proxi(props) {

    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(0);
    const [vida, setVida] = useState(100);
    const [vidaE, setVidaE] = useState(100);

    let random = randomGenerate(18, 5);
    let randomE = randomGenerate(18, 5);


    const handleOnChange = () =>{
        setNumber(newNumber)
    }

    const handleOnPress = () =>{
        const num =parseInt(number);
        const numRand = parseInt(random);
        const numRandE = parseInt(randomE);
        const text = calculateText(num, numRand);

        if (num === 1) {
            setVidaE(vidaE - numRand);
            setVida(vida - numRandE);
            textMaker(numRandE);
        }
        if (num === 3){
            setVida(vida + 40);
            setVida(vida - numRandE);
            textMaker(numRandE);
        }
        if (num === 2) {
            setVida(vida - (numRandE/1.5));
        }
        else{
            setVida(vida - numRandE);
            textMaker(numRandE / 1.5);
        }
        setNumber("");
        setMessage(text);
        setCount(count + 1);

    }

    return (
        <View styles={styles.game}>
            <Text>Ataque/Defensa</Text>
            <Text>Comandos: 1=Atacar, 2=Defender, 3=Curar "Maximo 3"</Text>
            <Text>Vida: {vida}</Text>
            <Text>Vida Enemigo: {vidaE}</Text>
            
            <TextInput
                placeholder="Elije"
                onChangeText={handleOnChange}
            />

            <Button
                title="Seguir"
                onPress={handleOnPress}
            />

        </View>
    );
}

export default Proxi;

const styles = StyleSheet.create({
    game: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        width: 400
    },

    button: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },

    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10
    }
})