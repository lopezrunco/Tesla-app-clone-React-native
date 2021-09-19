import React from 'react'

{/* FlatList se usa para el renderizado de listas de datos */}
import { View, Text, FlatList, Dimensions } from 'react-native'

{/* Importa la lista de autos */}
import cars from './cars'

{/* Importa el componente de auto */}
import CarItem from '../CarItem'

import styles from './styles'

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            {/* En data enviamos el array que vamos a recorrer */}
            {/* En renderItem enviamos una funcion que sera ejecutada por cada item del array */}
            {/* Por cada item del array, crea un componente CarItem */}
            {/* snapToAlignment hace que al hacer scroll, el mismo se ajuste en el componente mas cercano */}
            {/* decelerationRate es la velocidad con la que el scroll se ajustara al componente */}
            {/* snapToInterval recibe un valor para indicar que tan grande es un item en esta flatlist */}
            {/* showsVerticalScrollIndicator oculta el scroll vertical */}
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CarsList