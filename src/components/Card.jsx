import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('screen');

const SliderItem = ({ item, index }) => {
    return (
        <View className='justify-center items-center gap-5' style={{ width: width }}>
            <View className='grid grid-cols-3 gap-4'>
                <View className="col-start-auto"> <Text>IMAGEM DO REMÉDIO</Text></View>
                <View className='azul1'><Text>NOME DO REMÉDIO</Text></View>
            </View>

        </View>
    )
}

export default SliderItem