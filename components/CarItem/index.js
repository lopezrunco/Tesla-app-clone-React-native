import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = (props) => {
    return (

        <View style={styles.carContainer}>

            <ImageBackground
                source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <View style={styles.buttonContainer}>

                {/* En las props se envia el tipo de boton (primary/secondary), que luego se usa para estilizarlo. */}
                <StyledButton
                    type="primary"
                    content={"Custom order"}
                    onPress={() => {
                        console.log('Custom order pressed')
                    }}
                />

                <StyledButton
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.log('Existing invent pressed')
                    }}
                />

            </View>

        </View>

    )
}

export default CarItem