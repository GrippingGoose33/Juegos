import React from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';

function Proxi(props) {
    return (
        <View styles={styles.game}>
            <Text>Proximamente</Text>
            <View styles={styles.button}>
                <Button
                    title="Left"
                />
                <Button
                    title="Right"
                />
            </View>
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