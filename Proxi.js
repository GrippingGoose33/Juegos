import React, {useState} from 'react';
import { StyleSheet, View, Button, Text, TextInput, Image} from 'react-native';

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
    let [vida, setVida] = useState(100);
    const [vidaE, setVidaE] = useState(100);
    let random = randomGenerate(18, 5);
    let randomE = randomGenerate(14, 5);


    const handleOnChange = (newNumber) =>{
        setNumber(newNumber)
    }

    const handleOnPress = () =>{
        const num =parseInt(number);
        const numRand = parseInt(random);
        const numRandE = parseInt(randomE);

        if (num === 1) {
            setVidaE(vidaE - numRand);
            setVida(vida - numRandE);
            textMaker(numRandE);
        }
        if (num === 2) {
            setVida(vida - (numRandE/2));
        }
        else{
            setVida(vida - numRandE);
            textMaker(numRandE / 2);
        }
        setNumber("");
        setCount(count + 1);

    }

    return (
        <View styles={styles.game}>
            <Text>Ataque/Defensa</Text>
            <Text>Comandos: 1=Atacar, 2=Defender</Text>
            <Text style={styles.vida}>Vida: {vida}</Text>
                        <Image
                style={styles.imagen}
                source={{uri:'https://c8.alamy.com/compes/r7fpap/cartoon-caballero-medieval-con-escudo-y-lanza-aislado-sobre-fondo-blanco-r7fpap.jpg'}}
            />
            <Text style = {styles.vida}>Vida Enemigo: {vidaE}</Text>
            <Image
                style={styles.imagen}
                source={{uri:'https://img.freepik.com/vector-gratis/ilustracion-fantasma-blanco-silueta-fantasma-aislada-sobre-fondo-transparente_1441-2218.jpg?w=2000'}}
            />
            
            <TextInput
                placeholder="Elije"
                onChangeText={handleOnChange}
                defaultValue = {number}
                style={styles.input}
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
        justifyContent: "center",
        width: 400
    },

    vida:{
      backgroundColor: "red"
    },

    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10
    },

    imagen: {
        width: 100,
        height: 100,
    },
})