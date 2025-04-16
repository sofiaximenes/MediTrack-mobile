import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SliderItem from './SliderItem'
import tw from 'twrnc'

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
        <View style={tw`flex-col gap-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mt-6`}>
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
