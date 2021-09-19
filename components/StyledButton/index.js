import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
{/* Pressable se utiliza para registrar los touches del usuario, eso nos permite ejecutar cierto codigo  */ }

const StyledButton = (props) => {

    {/* Mediante props recibe el tipo de boton */}
    const type = props.type

    const content = props.content
    const onPress = props.onPress

    {/* Podemos simplificar la importacion de las props de la siguiente manera: */}
    {/* const { type, content, onPress } = props */}

    {/* Dependiendo de que tipo de boton viene en las props, sera el estilo que tendra */}
    const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6'
    const textColor = type === 'primary' ? '#ffffff' : '#171a20'

    return (
        <View style={styles.container}>
            {/* Se hace un merge entre dos estilos: los que vienen en las props y los de styles.js */}
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton