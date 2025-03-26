import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SliderItem from './SliderItem'

const Slider = () => {
    const ImageSlider = [
        {
            title: 'Proteção',
            image: require('../../assets/Carousel1.jpeg'),
            description: 'Ministério da saúde distribui mais de 1,2 milhôes de doses de vacina contra Covid-19'
        },
        {
            title: 'Agenda 2030',
            image: require('../../assets/Carousel2.jpeg'),
            description: 'Nísia Trindade apresenta ações do Ministério da Saúde para alcance das metas da Agenda 2030'
        },
        {
            title: 'Honraria',
            image: require('../../assets/Carousel3.jpeg'),
            description: 'Ministra da Saúde recebe medalha da Ordem do Mérito Aeronáutico'
        }
    ]

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={ImageSlider}
                renderItem={({ item, index }) => (
                    <SliderItem item={item} index={index} />
                )}
            />
        </View>
    )
}

export default Slider